import React from "react";

const ApprovedApplication = () => {
  const approvedLoans = [
    {
      id: "ALN001",
      borrower: { name: "Rahim Uddin", email: "rahim@example.com" },
      amount: "৳50,000",
      approvedAt: "2025-12-06",
    },
    {
      id: "ALN002",
      borrower: { name: "Sumaiya Akter", email: "sumaiya@example.com" },
      amount: "৳30,000",
      approvedAt: "2025-12-05",
    },
    {
      id: "ALN003",
      borrower: { name: "Nirob Hasan", email: "nirob@example.com" },
      amount: "৳75,000",
      approvedAt: "2025-12-03",
    },
  ];
  return (
    <div className=" p-6">
      <h1 className="text-2xl font-bold mb-6 text-[#2a6877]">
        Approved Loan Applications
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
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
            {approvedLoans.map((loan) => (
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
                <td className="px-4 py-3">{loan.approvedAt}</td>

                <td className="px-4 py-3 flex gap-2 justify-center">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    View
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    Delete
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

export default ApprovedApplication;
