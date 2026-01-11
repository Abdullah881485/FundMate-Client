import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQ = () => {
  const faqs = [
    {
      q: "Who can apply for a loan on FundMate?",
      a: "Any registered user with a verified profile can apply for loans through FundMate.",
    },
    {
      q: "How secure is my personal and financial data?",
      a: "FundMate uses secure authentication, protected APIs, and role-based access to ensure complete data safety.",
    },
    {
      q: "How long does loan approval take?",
      a: "Loan approval depends on document verification and admin review, usually completed within a short time.",
    },
    {
      q: "Can I track my loan application status?",
      a: "Yes, users can track loan status, approvals, and repayments directly from their dashboard.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-[90%] mx-auto my-16">
      {/* Section Header */}
      <div className="flex flex-col gap-4 mb-10">
        <h2 className="text-3xl font-bold text-center title-text">
          Frequently Asked Questions
        </h2>
        <p className="text-base-content/60 text-center max-w-2xl mx-auto">
          Clear answers to common questions about FundMate and loan processing.
        </p>
      </div>

      {/* FAQ Items */}
      <div data-aos="fade-up" className="space-y-4 ">
        {faqs.map((item, idx) => {
          const isOpen = activeIndex === idx;

          return (
            <div
              key={idx}
              className="bg-base-100 border border-base-300 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => setActiveIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-semibold title-text text-lg">
                  {item.q}
                </span>

                <FiChevronDown
                  className={`text-(--brand) text-xl transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 text-base-content/70 text-sm leading-relaxed transition-all duration-300 ${
                  isOpen
                    ? "pb-4 max-h-40 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {item.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
