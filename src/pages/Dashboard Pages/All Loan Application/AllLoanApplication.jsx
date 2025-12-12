import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllLoanApplication = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const applicationModalRef = useRef();
  const [selectedApplication, setSelectedApplication] = useState(null);

  const openApplicationModal = (app) => {
    setSelectedApplication(app);
    applicationModalRef.current.showModal();
  };
  const axiosSecure = useAxiosSecure();
  const { data: applications = [] } = useQuery({
    queryKey: ["allApplication"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allApplication");
      return res.data;
    },
  });
  // Filter applications based on status
  const filteredApplications =
    statusFilter === "All"
      ? applications
      : applications.filter((app) => app.status === statusFilter);
  return (
    <div className="p-0 md:p-6 ">
      <h2 className="text-2xl font-bold mb-4 text-[#2a6877]">
        Loan Applications
      </h2>

      {/* Filter */}
      <div className="mb-4 flex items-center gap-4">
        <label className="font-medium">Filter by Status:</label>
        <select
          className="border border-gray-300 rounded-md p-1"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-max divide-y divide-gray-200">
          <thead className="bg-[#2a6877] text-white">
            <tr>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-sm font-medium uppercase">
                Loan ID
              </th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-sm font-medium uppercase">
                User
              </th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-sm font-medium uppercase">
                Loan Category
              </th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-sm font-medium uppercase">
                Amount
              </th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-sm font-medium uppercase">
                Status
              </th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-sm font-medium uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredApplications.map((app) => (
              <tr key={app._id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{app._id}</td>
                <td className="px-4 py-3">
                  {app.firstName} {app.lastName} <br />{" "}
                  <span className="text-gray-500 text-sm">{app.email}</span>
                </td>
                <td className="px-4 py-3">{app.category}</td>
                <td className="px-4 py-3">${app.loanAmount}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-sm font-semibold
                    ${
                      app.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : app.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    className="px-3 py-1 bg-[#2a6877] text-white rounded-md shadow-[#2a687722]
      hover:bg-[#24555e] transition duration-300"
                    onClick={() => openApplicationModal(app)}
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
          <h3 className="font-bold text-lg text-[#2a6877]">
            Application Details
          </h3>

          <div className="py-4 flex flex-col gap-3 text-gray-700">
            <div className="p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 bg-gray-50">
              <h4 className="font-semibold text-[#2a6877]">
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
              <h4 className="font-semibold text-[#2a6877]">Loan Information</h4>
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
              <h4 className="font-semibold text-[#2a6877]">
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
              <h4 className="font-semibold text-[#2a6877]">
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

export default AllLoanApplication;
