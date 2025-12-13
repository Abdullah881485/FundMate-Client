import React, { useContext, useRef, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Provider/AuthContext";
import Swal from "sweetalert2";
import Loader1 from "../../../components/Loader/Loader";

const MyLoans = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const applicationModalRef = useRef();
  const detailsModalRef = useRef();
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const openApplicationModal = (loan) => {
    setSelectedApplication(loan);
    applicationModalRef.current.showModal();
  };
  const {
    data: myLoans = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myLoanApplication", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/myLoanApplication?email=${user?.email}`
      );
      return res.data;
    },
  });

  const handlePaymentDetails = async (loan) => {
    const res = await axiosSecure.get(`/payment?id=${loan._id}`);
    setSelectedPayment(res.data);
    detailsModalRef.current.showModal();
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
        const res = await axiosSecure.delete(`/allApplication/${id}`);

        if (res.data.deletedCount > 0) {
          Swal.fire("Deleted!", `${title} has been deleted.`, "success");
          refetch();
        }
      }
    });
  };

  const handlePayment = async (loan) => {
    const paymentInfo = {
      loanId: loan._id,
      email: user.email,
      loanTitle: loan.loanTitle,
    };
    const res = await axiosSecure.post("applicationFee", paymentInfo);
    // console.log(res.data);
    window.location.href = res.data.url;
  };

  if (loading || !user || isLoading) {
    return <Loader1></Loader1>;
  }
  return (
    <div className="p-0 md:p-6">
      <h1 className="text-2xl font-bold mb-6 text-(--brand)">My Loans</h1>
      {myLoans.length === 0 ? (
        <h1 className="text-center font-bold text-xl text-(--brand)">
          Please, Apply For Loan
        </h1>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-max w-full divide-y divide-gray-200">
            <thead className="bg-[#2a6877] text-white">
              <tr>
                <th className="px-4 py-2 text-left">Loan ID</th>
                <th className="px-4 py-2 text-left">Loan Info</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {myLoans.map((loan) => (
                <tr key={loan._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{loan._id}</td>

                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="font-semibold">{loan?.loanTitle}</span>
                      <span className="text-base-content/60 text-sm">
                        {loan?.category}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-3 font-medium text-green-600">
                    $ {loan.loanAmount}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-lg text-sm font-semibold
                    ${
                      loan.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : loan.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                    >
                      {loan.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 flex gap-2 justify-center flex-wrap">
                    <button
                      onClick={() => openApplicationModal(loan)}
                      className="bg-[#2a6877]
      text-white shadow-lg shadow-[#2a687722]
      hover:bg-[#24555e] px-3 py-1 rounded-md text-sm font-semibold"
                    >
                      View
                    </button>

                    {loan.status === "pending" && (
                      <button
                        onClick={() =>
                          handleDeleteLoan(loan._id, loan.loanTitle)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-semibold"
                      >
                        Cancel
                      </button>
                    )}

                    {loan.feeStatus === "unpaid" ? (
                      <button
                        onClick={() => handlePayment(loan)}
                        className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded-md text-sm font-semibold"
                      >
                        Pay Fee
                      </button>
                    ) : (
                      <button
                        onClick={() => handlePaymentDetails(loan)}
                        className="bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold"
                      >
                        Paid
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <dialog
        ref={applicationModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg text-(--brand)">
            Application Details
          </h3>

          <div className="py-4 flex flex-col gap-3 text-base-content/70">
            <div className="p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 bg-gray-50">
              <h4 className="font-semibold text-(--brand)">
                Borrower Information
              </h4>
              <p>
                <span className="font-semibold">Name:</span>{" "}
                {selectedApplication?.firstName} {selectedApplication?.lastName}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {selectedApplication?.email}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {selectedApplication?.contact}
              </p>
            </div>

            <div className="p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 bg-gray-50">
              <h4 className="font-semibold text-(--brand)">Loan Information</h4>
              <p>
                <span className="font-semibold">Loan Title:</span>{" "}
                {selectedApplication?.loanTitle}
              </p>
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {selectedApplication?.category}
              </p>
              <p>
                <span className="font-semibold">Interest Rate:</span>{" "}
                {selectedApplication?.interestRate}
              </p>
            </div>

            <div className="p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 bg-gray-50">
              <h4 className="font-semibold text-(--brand)">
                Financial Details
              </h4>
              <p>
                <span className="font-semibold">Requested Amount:</span> $
                {selectedApplication?.loanAmount}
              </p>
              <p>
                <span className="font-semibold">Loan Reason:</span>
                {selectedApplication?.loanReason}
              </p>
            </div>

            <div className="p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 bg-gray-50">
              <h4 className="font-semibold text-(--brand)">
                Application Status
              </h4>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span
                  className={
                    selectedApplication?.status === "approved"
                      ? "text-green-600 font-bold"
                      : selectedApplication?.status === "pending"
                      ? "text-yellow-600 font-bold"
                      : "text-red-600 font-bold"
                  }
                >
                  {selectedApplication?.status}
                </span>
              </p>
              <p>
                <span className="font-semibold">Applied On:</span>{" "}
                {new Date(selectedApplication?.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Close Button */}
          <div className="modal-action">
            <button
              className="btn rounded-xl bg-[#2a6877] px-6 py-2 font-semibold text-white hover:bg-[#24545c] transition duration-300"
              onClick={() => applicationModalRef.current.close()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
      <dialog
        ref={detailsModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg text-(--brand)">
            Application Details
          </h3>

          <div className="py-4 flex flex-col gap-3 text-base-content/70">
            <div className="p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 bg-gray-50">
              <h4 className="font-semibold text-(--brand)">
                Borrower Information
              </h4>

              <p>
                <span className="font-semibold">Email:</span>{" "}
                {selectedPayment?.email}
              </p>
            </div>

            <div className="p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 bg-gray-50">
              <h4 className="font-semibold text-(--brand)">Loan Information</h4>
              <p>
                <span className="font-semibold">Loan Title:</span>{" "}
                {selectedPayment?.loanTitle}
              </p>
              <p>
                <span className="font-semibold">TransactionId:</span>{" "}
                {selectedPayment?.transactionId}
              </p>
            </div>
            <div className="p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 bg-gray-50">
              <h4 className="font-semibold text-(--brand)">
                Application Status
              </h4>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span
                  className={
                    selectedPayment?.feeStatus === "paid"
                      ? "text-green-600 font-bold"
                      : selectedPayment?.feeStatus === "pending"
                      ? "text-yellow-600 font-bold"
                      : "text-red-600 font-bold"
                  }
                >
                  {selectedPayment?.feeStatus}
                </span>
              </p>
            </div>
          </div>

          {/* Close Button */}
          <div className="modal-action">
            <button
              className="btn rounded-xl bg-[#2a6877] px-6 py-2 font-semibold text-white hover:bg-[#24545c] transition duration-300"
              onClick={() => detailsModalRef.current.close()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyLoans;
