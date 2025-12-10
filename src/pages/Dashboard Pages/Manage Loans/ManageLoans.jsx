import React from "react";

const ManageLoans = () => {
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
  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-4 text-[#2a6877]">Manage Loans</h2>
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
                <td>
                  <div className=" items-center flex gap-2">
                    <button
                      className="px-3 py-1 bg-[#2a6877]
      text-white shadow-lg shadow-[#2a687722]
      hover:bg-[#24555e] rounded-md font-semibold cursor-pointer transition"
                      onClick={() => alert(`Update ${loan.title}`)}
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
    </div>
  );
};

export default ManageLoans;
