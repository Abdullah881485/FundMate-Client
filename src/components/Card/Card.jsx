import React from "react";
import { Link } from "react-router-dom";

const Card = ({ loan }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-base-100 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200 "
    >
      <img
        src={loan?.loanImage}
        alt="Student Loan"
        className="w-full h-45 object-cover"
      />
      <div className="p-4 flex flex-col grow">
        <h3 className="text-lg font-semibold text-(--brand) mb-2">
          {loan?.loanTitle}
        </h3>
        <p className="text-base-content/60 text-sm mb-3 line-clamp-2">
          {loan?.description}
        </p>
        <div className="font-semibold text-base-content/60 mb-4">
          Max Loan: <span className="text-green-600">${loan?.maxLimit}</span>
        </div>
        <Link
          to={`/loan-details/${loan._id}`}
          className="mt-auto text-center bg-[#2a6877] text-white py-2 font-medium cursor-pointer hover:bg-[#24555e] rounded-lg transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
