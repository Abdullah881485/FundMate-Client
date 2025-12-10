import React, { useRef, useState } from "react";

const AllDisplayedLoans = () => {
  const [selectedLoan, setSelectedLoan] = useState(null);
  const loansData = [
    {
      id: 1,
      image: "/loan1.jpg",
      title: "Small Business Loan",
      interest: 10,
      category: "Business",
      createdBy: "Admin",
      showOnHome: true,
    },
    {
      id: 2,
      image: "/loan2.jpg",
      title: "Education Loan",
      interest: 8,
      category: "Education",
      createdBy: "Manager",
      showOnHome: false,
    },
  ];
  const loanModalRef = useRef();
  const loanModalOpen = (loan) => {
    setSelectedLoan(loan);
    loanModalRef.current.showModal();
  };
  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-4 text-[#2a6877]">All Loans</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#2a6877] text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase">
                Image
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase">
                Title
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase">
                Interest
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase">
                Category
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase">
                Created By
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium uppercase">
                Show on Home
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loansData.map((loan) => (
              <tr key={loan.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <img
                    src={loan.image}
                    alt={loan.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="px-4 py-3">{loan.title}</td>
                <td className="px-4 py-3">{loan.interest}%</td>
                <td className="px-4 py-3">{loan.category}</td>
                <td className="px-4 py-3">{loan.createdBy}</td>
                <td className="px-4 py-3 text-center">
                  <input
                    type="checkbox"
                    checked={loan.showOnHome}
                    onChange={() =>
                      alert(`Toggle Show on Home for ${loan.title}`)
                    }
                    className="w-5 h-5 text-[#2a6877] border-gray-300 rounded"
                  />
                </td>
                <td>
                  <div className=" items-center flex gap-2">
                    <button
                      className="px-3 py-1 bg-[#2a6877]
      text-white shadow-lg shadow-[#2a687722]
      hover:bg-[#24555e] rounded-md font-semibold cursor-pointer transition"
                      onClick={() => loanModalOpen(loan)}
                    >
                      Update
                    </button>
                    <button
                      className="px-3 py-1 bg-red-600 text-white font-semibold cursor-pointer rounded-md hover:bg-red-700 transition"
                      onClick={() => alert(`Delete ${loan.title}`)}
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

          <form className="py-4 flex flex-col gap-1 text-gray-600">
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="flex flex-col flex-1 gap-2">
                <label>Loan Title</label>
                <input
                  name="loanTitle"
                  type="text"
                  placeholder="Enter Loan Title"
                  className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <label>Interest Rate (%)</label>
                <input
                  name="interestRate"
                  type="number"
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
                  placeholder="Loan Category"
                  className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <label>Max Loan Limit</label>
                <input
                  name="maxLoanLimit"
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
                defaultValue={selectedLoan?.emiPlans}
                type="text"
                placeholder="e.g., 3 months, 6 months, 12 months"
                className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
              />
            </div>

            {/* Image Upload */}
            <div className="flex flex-col gap-1">
              <label className="">Upload Images</label>
              <input
                type="file"
                multiple
                className="file-input input w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
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
