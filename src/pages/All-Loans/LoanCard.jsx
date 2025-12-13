import React from "react";
import { Link } from "react-router-dom";

const LoanCard = ({ loan }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-base-100 rounded-2xl shadow-md border border-base-100 overflow-hidden flex flex-col 
    hover:shadow-2xl  hover:border-base-200 transition-all duration-300"
    >
      <div className="relative">
        <img
          src={loan?.loanImage}
          alt={loan?.loanTitle}
          className="w-full h-52 object-cover"
        />

        <span
          className="absolute top-4 left-4 backdrop-blur-md bg-base-100/40 border border-white/30 
        text-base-content/80 text-xs font-medium px-3 py-1 rounded-full shadow-sm"
        >
          {loan?.category}
        </span>
      </div>

      <div className="p-5 flex flex-col grow">
        <h3 className="text-xl font-semibold text-(--brand) mb-2 tracking-tight">
          {loan?.loanTitle}
        </h3>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-base-content/60 text-sm">Interest:</span>
          <span className="text-sm font-semibold text-(--brand)">
            {loan?.interestRate}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-base-content/60 text-sm">Max Loan:</span>
          <span className="text-lg font-bold text-green-600">
            {loan?.maxLimit} $
          </span>
        </div>

        <div className="h-px w-full bg-linear-to-r from-transparent via-gray-200 to-transparent my-3"></div>

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
