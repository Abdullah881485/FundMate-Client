import React from "react";
import { Link } from "react-router-dom";

const LoanCard = ({ loan }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col 
    hover:shadow-2xl  hover:border-gray-200 transition-all duration-300"
    >
      {/* Image + Badge */}
      <div className="relative">
        <img
          src={loan?.loanImage}
          alt={loan?.loanTitle}
          className="w-full h-52 object-cover"
        />

        {/* Glass Badge */}
        <span
          className="absolute top-4 left-4 backdrop-blur-md bg-white/40 border border-white/30 
        text-gray-900 text-xs font-medium px-3 py-1 rounded-full shadow-sm"
        >
          {loan?.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col grow">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 tracking-tight">
          {loan?.loanTitle}
        </h3>

        {/* Interest */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-500 text-sm">Interest:</span>
          <span className="text-sm font-semibold text-[#2a6877]">
            {loan?.interestRate}
          </span>
        </div>

        {/* Max Loan */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-500 text-sm">Max Loan:</span>
          <span className="text-lg font-bold text-green-600">
            {loan?.maxLimit} $
          </span>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-gray-200 to-transparent my-3"></div>

        {/* Button */}
        <Link
          to={`/loan-details/${loan._id}`}
          className="mt-auto text-center py-2.5 rounded-lg font-medium 
      bg-[#2a6877]
      text-white shadow-lg shadow-[#2a687722]
      hover:bg-[#24555e] cursor-pointer active:scale-[0.97]
      transition-all duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default LoanCard;
