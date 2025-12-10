import React from "react";

const MyLoans = () => {
  const myLoans = [
    {
      id: "LN1001",
      loanInfo: "Personal Loan - Emergency Fund",
      amount: "৳20,000",
      status: "Pending",
      feeStatus: "Unpaid",
    },
    {
      id: "LN1002",
      loanInfo: "Business Loan",
      amount: "৳50,000",
      status: "Approved",
      feeStatus: "Paid",
    },
    {
      id: "LN1003",
      loanInfo: "Education Loan",
      amount: "৳15,000",
      status: "Rejected",
      feeStatus: "Unpaid",
    },
  ];

  return (
    <div className=" p-6">
      <h1 className="text-2xl font-bold mb-6 text-[#2a6877]">My Loans</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
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
              <tr key={loan.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{loan.id}</td>

                <td className="px-4 py-3">{loan.loanInfo}</td>

                <td className="px-4 py-3">{loan.amount}</td>

                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-sm font-semibold
                    ${
                      loan.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : loan.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {loan.status}
                  </span>
                </td>

                <td className="px-4 py-3 flex gap-2 justify-center flex-wrap">
                  <button className="">
                    <lord-icon
                      src="https://cdn.lordicon.com/dicvhxpz.json"
                      trigger="loop"
                      delay="2000"
                      colors="primary:#121331,secondary:#2a6877"
                      style={{ width: "25px", height: "25px" }}
                    ></lord-icon>
                  </button>

                  {/* Cancel Button — Only if Pending */}
                  {loan.status === "Pending" && (
                    <button className="btn">Cancel</button>
                  )}

                  {/* Pay Button or Paid Badge */}
                  {loan.feeStatus === "Unpaid" ? (
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                      Pay Fee
                    </button>
                  ) : (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                      Paid
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLoans;
