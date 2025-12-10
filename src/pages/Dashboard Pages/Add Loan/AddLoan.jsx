import React from "react";

const AddLoan = () => {
  const handleAddTransaction = (e) => {
    e.preventDefault();
    alert("Form submitted"); // Replace with actual submit logic
  };

  return (
    <div className="w-[95%] md:w-6/10 mx-auto p-3 md:p-6 rounded-2xl shadow bg-white my-10 text-gray-600">
      <title>FundMAte | Add Loan</title>
      <h1 className="text-2xl font-bold mb-4 text-[#2a6877]">Add Loan</h1>
      <form
        onSubmit={handleAddTransaction}
        className="w-full max-w-3xl mx-auto"
      >
        {/* Loan Title + Interest Rate */}
        <div className="flex flex-col md:flex-row gap-6 mb-4">
          <div className="flex flex-col flex-1 gap-2">
            <label>Loan Title</label>
            <input
              name="loanTitle"
              type="text"
              placeholder="Enter Loan Title"
              className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
              required
            />
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <label>Interest Rate (%)</label>
            <input
              name="interestRate"
              type="number"
              placeholder="Enter Interest Rate"
              className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2 mb-4">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Enter Loan Description"
            className="textarea w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
            required
          />
        </div>

        {/* Category + Max Loan Limit */}
        <div className="flex flex-col md:flex-row gap-6 mb-4">
          <div className="flex flex-col flex-1 gap-2">
            <label>Category</label>
            <input
              name="category"
              type="text"
              placeholder="Loan Category"
              className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
              required
            />
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <label>Max Loan Limit</label>
            <input
              name="maxLoanLimit"
              type="number"
              placeholder="Enter Max Loan Limit"
              className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
              required
            />
          </div>
        </div>

        {/* Required Documents */}
        <div className="flex flex-col gap-2 mb-4">
          <label>Required Documents</label>
          <input
            name="requiredDocs"
            type="text"
            placeholder="e.g., ID, Income Proof"
            className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
          />
        </div>

        {/* EMI Plans */}
        <div className="flex flex-col gap-2 mb-4">
          <label>EMI Plans</label>
          <input
            name="emiPlans"
            type="text"
            placeholder="Enter EMI Plans e.g., 6, 12, 24 months"
            className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
          />
        </div>

        {/* Images Upload */}
        <div className="flex flex-col gap-2 mb-4">
          <label>Upload Images</label>
          <input
            name="images"
            type="file"
            multiple
            className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-3">
          <button
            type="reset"
            className="rounded-md text-xs md:text-sm cursor-pointer py-2.5 md:py-1.5 px-1 md:px-12 bg-transparent border-2 border-[#2a6877] font-semibold text-[#2a6877] hover:bg-[#2a6877] hover:text-white w-full sm:w-auto transition-all duration-200"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-[#2a6877] text-white shadow-lg shadow-[#2a687722] hover:bg-[#24555e] text-xs md:text-sm rounded-md font-bold cursor-pointer py-3 md:py-2 px-2 md:px-7 w-full sm:w-auto transition-all duration-200"
          >
            Submit Loan
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLoan;
