import React from "react";

const AvailableLoans = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="title-text text-center font-bold text-3xl">
        Available Loans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200 ">
          <img
            src="https://i.ibb.co.com/5gqcBCzj/Student-Loans-Guide-1024x768.jpg"
            alt="Student Loan"
            className="w-full h-45 object-cover"
          />
          <div className="p-4 flex flex-col grow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Student Loan
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Description of the student loan goes here.
            </p>
            <div className="font-bold text-gray-900 mb-4">
              Max Loan: <span className="text-green-600">$10,000</span>
            </div>
            <button
              onClick={() => alert(`Redirect to Student Loan details`)}
              className="mt-auto bg-[#2a6877] text-white py-2 font-medium cursor-pointer hover:bg-[#24555e] rounded-lg transition-colors duration-200"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableLoans;
