// Banner.jsx
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="w-full">
      <div className="w-[90%] mx-auto px-4">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          <div className="flex flex-1 flex-col gap-5">
            <h1 className="title-text font-bold text-6xl">
              Quick and Easy Loans for Your Financial Needs.
            </h1>
            <p className="text-gray-500 text-lg">
              Our loan services offer a hassle-free and streamlined borrowing
              experience, providing you with the funds you need in a timely
              manner to meet your financial requirements.
            </p>
            <Link
              to="/application"
              className="btn rounded-2xl bg-transparent border-2 border-[#2a6877] px-6 py-2 w-fit font-semibold text-[#2a6877] hover:bg-[#2a6877] hover:text-white transition duration-300"
            >
              Apply Now
            </Link>
          </div>
          <div className="flex-1">
            <img src="https://i.ibb.co.com/HLtxdb1d/bank-PNG24.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
