import React from "react";

export default function LoanDetails() {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Loan Image */}
        <div className="w-full h-64 bg-gray-200">
          <img
            src="https://images.unsplash.com/photo-1580519542036-c47de6196b9c"
            alt="Loan"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title + Category */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Personal Micro Loan
            </h1>
            <p className="text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full inline-block">
              Category: Personal Loan
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            This microloan is designed to support individuals who need a small,
            fast, and flexible financial boost. Ideal for emergency expenses,
            education, small businesses, and personal needs.
          </p>

          {/* Loan Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-5 border rounded-xl bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-1">
                Interest Rate
              </h3>
              <p className="text-gray-700">12% per year</p>
            </div>

            <div className="p-5 border rounded-xl bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-1">
                Maximum Limit
              </h3>
              <p className="text-gray-700">Up to 120,000 BDT</p>
            </div>

            <div className="p-5 border rounded-xl bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-1">
                EMI Plans Available
              </h3>
              <ul className="text-gray-700 list-disc ml-5">
                <li>3 Months</li>
                <li>6 Months</li>
                <li>12 Months</li>
              </ul>
            </div>

            <div className="p-5 border rounded-xl bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-1">
                Processing Time
              </h3>
              <p className="text-gray-700">Within 24 Hours</p>
            </div>
          </div>

          {/* Apply Button */}
          <div className="text-center">
            <button
              className="bg-[#2a6877]
      text-white shadow-lg shadow-[#2a687722] font-bold
      hover:bg-[#24555e]  px-10 py-3 text-lg rounded-lg transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
