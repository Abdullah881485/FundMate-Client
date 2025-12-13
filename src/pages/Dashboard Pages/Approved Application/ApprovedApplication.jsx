import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loader1 from "../../../components/Loader/Loader";

const ApprovedApplication = () => {
  const applicationModalRef = useRef();
  const [selectedApplication, setSelectedApplication] = useState(null);

  const openApplicationModal = (loan) => {
    setSelectedApplication(loan);
    applicationModalRef.current.showModal();
  };
  const axiosSecure = useAxiosSecure();
  const { data: loans = [], isLoading } = useQuery({
    queryKey: ["manageLoan"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/statusByApplication?status=approved`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader1></Loader1>;
  }
  return (
    <div className="p-0 md:p-6">
      <h1 className="text-2xl font-bold mb-6 text-(--brand)">
        Approved Loan Applications
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-max w-full divide-y divide-gray-200">
          <thead className="bg-[#2a6877] text-white">
            <tr>
              <th className="px-4 py-2 text-left">Loan ID</th>
              <th className="px-4 py-2 text-left">Borrower Info</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Approved Date</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {loans.map((loan) => (
              <tr key={loan._id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{loan?._id}</td>

                <td className="px-4 py-3">
                  <div className="flex flex-col">
                    <span className="font-semibold">
                      {loan?.firstName} {loan?.lastName}
                    </span>
                    <span className="text-base-content/60 text-sm">
                      {loan?.email}
                    </span>
                  </div>
                </td>

                <td className="px-4 py-3 text-green-600">
                  $ {loan?.loanAmount}
                </td>
                <td className="px-4 py-3">
                  {new Date(loan?.approvedAt).toLocaleDateString()}
                </td>

                <td className="px-4 py-3 flex gap-2 justify-center">
                  <button
                    onClick={() => openApplicationModal(loan)}
                    className="bg-[#2a6877]
      text-white shadow-lg shadow-[#2a687722]
      hover:bg-[#24555e] px-3 py-1 rounded-md text-sm font-semibold"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
                {selectedApplication?.createdAt}
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
    </div>
  );
};

export default ApprovedApplication;
