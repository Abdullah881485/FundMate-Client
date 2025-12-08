import React from "react";
import LoanCard from "./LoanCard";

const AllLoans = () => {
  return (
    <div>
      <title>FundMate | All Loans</title>
      <h1 className="title-text text-center font-bold text-3xl my-5">
        All Available Loans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        <LoanCard
          image="https://i.ibb.co.com/5gqcBCzj/Student-Loans-Guide-1024x768.jpg"
          title="Student Loan"
          category="Education"
          interest="5% Yearly"
          maxLimit="$10,000"
        />

        <LoanCard
          image="https://via.placeholder.com/400"
          title="Small Business Loan"
          category="Business"
          interest="7% Yearly"
          maxLimit="$25,000"
        />

        <LoanCard
          image="https://via.placeholder.com/400"
          title="Agriculture Loan"
          category="Farming"
          interest="4% Yearly"
          maxLimit="$15,000"
        />
      </div>
    </div>
  );
};

export default AllLoans;
