import React, { useState } from "react";

const AllLoanApplication = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const applications = [
    {
      id: "LN001",
      userName: "John Doe",
      email: "john@example.com",
      category: "Business",
      amount: 5000,
      status: "Pending",
    },
    {
      id: "LN002",
      userName: "Jane Smith",
      email: "jane@example.com",
      category: "Education",
      amount: 3000,
      status: "Approved",
    },
    {
      id: "LN003",
      userName: "Mike Johnson",
      email: "mike@example.com",
      category: "Personal",
      amount: 2000,
      status: "Rejected",
    },
  ];
  // Filter applications based on status
  const filteredApplications =
    statusFilter === "All"
      ? applications
      : applications.filter((app) => app.status === statusFilter);
  return (
    <div className="p-6 rounded-md">
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
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-[#2a6877] text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase">
                Loan ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase">
                User
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase">
                Loan Category
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase">
                Amount
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredApplications.map((app) => (
              <tr key={app.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{app.id}</td>
                <td className="px-4 py-3">
                  {app.userName} <br />{" "}
                  <span className="text-gray-500 text-sm">{app.email}</span>
                </td>
                <td className="px-4 py-3">{app.category}</td>
                <td className="px-4 py-3">${app.amount}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-sm font-semibold
                    ${
                      app.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : app.status === "Pending"
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
                    onClick={() => alert(`View details for Loan ID ${app.id}`)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllLoanApplication;
