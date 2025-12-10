import React from "react";

const PendingApplication = () => {
  const pendingLoans = [
    {
      id: "LN001",
      borrower: { name: "John Doe", email: "john@example.com" },
      amount: "$1,000",
      date: "2025-12-08",
    },
    {
      id: "LN002",
      borrower: { name: "Jane Smith", email: "jane@example.com" },
      amount: "$2,500",
      date: "2025-12-07",
    },
    {
      id: "LN003",
      borrower: { name: "Mark Johnson", email: "mark@example.com" },
      amount: "$1,800",
      date: "2025-12-06",
    },
  ];
  return (
    <div className=" p-6">
      <h1 className="text-2xl font-bold mb-6 text-[#2a6877]">
        Pending Loan Applications
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#2a6877] text-white">
            <tr>
              <th className="px-4 py-2 text-left">Loan ID</th>
              <th className="px-4 py-2 text-left">Borrower Info</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pendingLoans.map((loan) => (
              <tr key={loan.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{loan.id}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-col">
                    <span className="font-semibold">{loan.borrower.name}</span>
                    <span className="text-gray-500 text-sm">
                      {loan.borrower.email}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">{loan.amount}</td>
                <td className="px-4 py-3">{loan.date}</td>
                <td className="px-4 py-3 flex gap-2 justify-center">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    Approve
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    Reject
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
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

export default PendingApplication;
