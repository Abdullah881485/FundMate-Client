import React from "react";

const HowItWorks = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex flex-col gap-5 my-5">
        <h2 className="text-3xl font-bold text-center title-text">
          How It Works
        </h2>
        <p className="text-base-content/60 text-center">
          This is a process, how you can get loan for your self.
        </p>
      </div>
      <div
        data-aos="fade-left"
        className="flex items-center justify-center flex-col md:flex-row"
      >
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.ibb.co.com/qSJLgX3/1000x2-Suivi-Formation.png"
            alt=""
            className="w-100"
          />
        </div>
        <div className="flex-1 space-y-2">
          <h1 className="title-text text-2xl font-semibold">Application</h1>
          <p className="text-base-content/60">
            The borrower submits a loan application to the bank, either in
            person, online, or through other channels. The application includes
            personal and financial information, such as income, employment
            history, credit score, and the purpose of the loan.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-right"
        className="flex items-center justify-between flex-col-reverse md:flex-row"
      >
        <div className="flex-1 space-y-2">
          <h1 className="title-text text-2xl font-semibold">
            Documentation and Verification
          </h1>
          <p className="text-base-content/60">
            The bank requests supporting documents from the borrower, such as
            identification proof, income statements, bank statements, and
            collateral details (if applicable). The bank verifies the
            information provided to assess the borrower's creditworthiness and
            eligibility for the loan.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.ibb.co.com/k2tDZpMg/5145110.png"
            alt=""
            className="w-100"
          />
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="flex items-center justify-between flex-col md:flex-row"
      >
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.ibb.co.com/JjHXPjtg/ill-succes.png"
            alt=""
            className="w-100"
          />
        </div>
        <div className="flex-1 space-y-2">
          <h1 className="title-text text-2xl font-semibold">Loan Approval</h1>
          <p className="text-base-content/60">
            If the borrower meets the bank's lending criteria and passes the
            credit assessment, the loan is approved. The bank determines the
            loan amount, interest rate, repayment term, and any associated fees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
