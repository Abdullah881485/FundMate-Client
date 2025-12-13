import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useRole from "../../Hooks/useRole";
import Loader1 from "../../components/Loader/Loader";

export default function LoanDetails() {
  const loanDetails = useLoaderData();
  // console.log(loanDetails);
  const { role, roleLoading } = useRole();
  if (roleLoading) {
    return <Loader1></Loader1>;
  }
  return (
    <div data-aos="fade-up" className="min-h-screen w-[90%] mx-auto py-10">
      <div className="w-[95%] md:w-full mx-auto bg-base-100 shadow-lg rounded-2xl overflow-hidden">
        <div className="w-full h-74 bg-base-200">
          <img
            src={loanDetails?.loanImage}
            alt="Loan"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-3 md:p-8">
          <div className="mb-6">
            <h1 className="title-text text-2xl md:text-3xl font-bold text-base-content/90 mb-2">
              {loanDetails?.loanTitle}
            </h1>
            <p className="text-green-600 font-medium bg-base-300 px-3 py-1 rounded-full inline-block">
              Category: {loanDetails?.category}
            </p>
          </div>

          <p className="text-base-content/70 leading-relaxed mb-6">
            {loanDetails?.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 bg-base-200">
              <h3 className="font-semibold text-base-content/90 mb-1">
                Interest Rate
              </h3>
              <p className="text-base-content/70">
                {loanDetails?.interestRate} per year
              </p>
            </div>

            <div className="p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 bg-base-200">
              <h3 className="font-semibold text-base-content/90 mb-1">
                Maximum Limit
              </h3>
              <p className="text-base-content/70">
                Up to {loanDetails?.maxLimit} BDT
              </p>
            </div>

            <div className="p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 bg-base-200">
              <h3 className="font-semibold text-base-content/90 mb-1">
                EMI Plans Available
              </h3>
              <ul className="text-base-content/70 list-disc ml-5">
                {loanDetails.availableEMIPlans.map((emi) => (
                  <li>{emi}</li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 bg-base-200">
              <h3 className="font-semibold text-base-content/90 mb-1">
                Processing Time
              </h3>
              <p className="text-base-content/70">Within 24 Hours</p>
            </div>
          </div>
          {role === "Borrower" && (
            <div className="text-center">
              <Link
                to="/application"
                state={{ loanDetails }}
                className="bg-[#2a6877]
      text-white shadow-lg shadow-[#2a687722] font-semibold
      hover:bg-[#24555e]  btn px-10 text-xs md:text-[16px] rounded-lg transition cursor-pointer"
              >
                Apply Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
