import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Loader1 from "../../../components/Loader/Loader";

const AllDisplayedLoans = () => {
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [emiPlans, setEmiPlans] = useState([]);
  const axiosSecure = useAxiosSecure();
  const handleEMIInput = (e) => {
    const value = e.target.value;
    const array = value.split(",").map((item) => item.trim());
    setEmiPlans(array);
  };
  // console.log(selectedLoan);

  const {
    data: loans = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allLoan"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allLoan");
      return res.data.result;
    },
  });
  const loanModalRef = useRef();
  const loanModalOpen = (loan) => {
    setSelectedLoan(loan);
    loanModalRef.current.showModal();
  };

  const handleUpdateLoan = (e) => {
    e.preventDefault();
    const form = e.target;
    const loanTitle = form.loanTitle.value;
    const interestRate = form.interestRate.value;
    const description = form.description.value;
    const category = form.category.value;
    const maxLimit = form.maxLoanLimit.value;
    const availableEMIPlans = emiPlans;
    const loanImage = form.image.value;

    const updatedLoan = {
      loanTitle,
      interestRate,
      description,
      category,
      maxLimit,
      availableEMIPlans,
      loanImage,
    };
    // console.log(updatedLoan);

    axiosSecure
      .patch(`/allLoan/${selectedLoan._id}`, updatedLoan)
      .then((res) => {
        const _data = res.data;
        refetch();
        loanModalRef.current.close();
      });
  };
  const handleToggleShowOnHome = async (id, value) => {
    // console.log(value);

    axiosSecure
      .patch(`/availableLoan/${id}`, { showOnHome: value })
      .then((res) => {
        const _data = res.data;
        refetch();
      });
  };

  const handleDeleteLoan = (id, title) => {
    Swal.fire({
      title: `Delete ${title}?`,
      text: "You cannot undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/allLoan/${id}`);

        if (res.data.deletedCount > 0) {
          Swal.fire("Deleted!", `${title} has been deleted.`, "success");
          refetch();
        }
      }
    });
  };
  if (isLoading) {
    return <Loader1></Loader1>;
  }
  return (
    <div className="p-0 md:p-6 ">
      <h2 className="text-2xl font-bold mb-4 text-[#2a6877]">All Loans</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max divide-y divide-gray-200">
          <thead className="bg-[#2a6877] text-white">
            <tr>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm uppercase">
                Image
              </th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm uppercase">
                Title
              </th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm uppercase">
                Interest
              </th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm uppercase">
                Category
              </th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm uppercase">
                Created By
              </th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-sm uppercase">
                Show on Home
              </th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {loans.map((loan) => (
              <tr key={loan._id} className="hover:bg-gray-50">
                {/* Image */}
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <img
                    src={loan.loanImage}
                    alt={loan.loanTitle}
                    className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-md"
                  />
                </td>

                {/* Title */}
                <td className="px-2 md:px-4 py-2 md:py-3">{loan.loanTitle}</td>

                {/* Interest */}
                <td className="px-2 md:px-4 py-2 md:py-3">
                  {loan.interestRate}
                </td>

                {/* Category */}
                <td className="px-2 md:px-4 py-2 md:py-3">{loan.category}</td>

                {/* Creator */}
                <td className="px-2 md:px-4 py-2 md:py-3">{loan.createdBy}</td>

                {/* Checkbox */}
                <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                  <input
                    type="checkbox"
                    defaultChecked={loan.showOnHome}
                    onChange={(e) =>
                      handleToggleShowOnHome(loan._id, e.target.checked)
                    }
                    className="w-4 h-4 md:w-5 md:h-5 text-[#2a6877] border-gray-300 rounded"
                  />
                </td>

                {/* Actions */}
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <div className="flex flex-col md:flex-row gap-2">
                    <button
                      className="px-3 py-1 bg-[#2a6877] text-white shadow-md rounded-md font-semibold hover:bg-[#24555e] transition"
                      onClick={() => loanModalOpen(loan)}
                    >
                      Update
                    </button>

                    <button
                      className="px-3 py-1 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
                      onClick={() => handleDeleteLoan(loan._id, loan.loanTitle)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dialog ref={loanModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-[#2a6877]">
            Update Loan Information
          </h3>

          <form
            key={selectedLoan?._id}
            onSubmit={handleUpdateLoan}
            className="py-4 flex flex-col gap-1 text-gray-600"
          >
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="flex flex-col flex-1 gap-2">
                <label>Loan Title</label>
                <input
                  name="loanTitle"
                  type="text"
                  placeholder="Enter Loan Title"
                  defaultValue={selectedLoan?.loanTitle}
                  className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <label>Interest Rate (%)</label>
                <input
                  name="interestRate"
                  defaultValue={selectedLoan?.interestRate}
                  placeholder="Enter Interest Rate"
                  className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2 mb-4">
              <label>Description</label>
              <textarea
                name="description"
                defaultValue={selectedLoan?.description}
                placeholder="Enter Loan Description"
                className="textarea w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
                required
              />
            </div>

            {/* Category + Max Loan Limit */}
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="flex flex-col flex-1 gap-2">
                <label>Category</label>
                <input
                  name="category"
                  type="text"
                  defaultValue={selectedLoan?.category}
                  placeholder="Loan Category"
                  className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <label>Max Loan Limit</label>
                <input
                  name="maxLoanLimit"
                  defaultValue={selectedLoan?.maxLimit}
                  type="number"
                  placeholder="Enter Max Loan Limit"
                  className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
                  required
                />
              </div>
            </div>

            {/* EMI Plans */}
            <div className="flex flex-col gap-1">
              <label className="">Available EMI Plans (Comma Separated)</label>
              <input
                defaultValue={selectedLoan?.availableEMIPlans?.join(", ")}
                type="text"
                onChange={handleEMIInput}
                name="availableEmiPlans"
                placeholder="e.g., 3 months, 6 months, 12 months"
                className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
              />
            </div>

            {/* Image Upload */}
            <div className="flex flex-col gap-1">
              <label className="">Upload Images</label>
              <input
                name="image"
                placeholder="place a URL"
                defaultValue={selectedLoan?.loanImage}
                className=" input w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-end gap-3 mt-4">
              <button
                type="button"
                className="btn rounded-xl bg-transparent border-2 border-[#2a6877] px-6 py-2 font-semibold text-[#2a6877] hover:bg-[#2a6877] hover:text-white transition duration-300"
                onClick={() => loanModalRef.current.close()}
              >
                Close
              </button>

              <button
                type="submit"
                className="btn rounded-xl bg-[#2a6877] px-6 py-2 font-semibold text-white hover:bg-[#24545c] transition duration-300"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AllDisplayedLoans;
