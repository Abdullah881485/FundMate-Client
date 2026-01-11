import {
  FaUserCheck,
  FaIdCard,
  FaMoneyBillWave,
  FaFileAlt,
} from "react-icons/fa";

const Eligibility = () => {
  return (
    <section className="w-[90%] mx-auto my-16">
      {/* Section Header */}
      <div className="flex flex-col gap-4 mb-12">
        <h2 className="text-3xl font-bold text-center title-text">
          Eligibility & Requirements
        </h2>
        <p className="text-base-content/60 text-center max-w-2xl mx-auto">
          Before applying for a loan, please ensure you meet the following basic
          eligibility criteria and document requirements.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Age & Account */}
        <div
          data-aos="fade-up"
          className="bg-base-100  rounded-xl p-6 shadow-md hover:shadow-xl transition"
        >
          <FaUserCheck className="text-3xl mb-4 text-(--brand)" />
          <h3 className="text-lg font-semibold mb-2 text-(--brand)">
            Age & Account
          </h3>
          <p className="text-base-content/60 text-sm">
            Applicants must be at least 18 years old and have a valid FundMate
            user account.
          </p>
        </div>

        {/* Identity Verification */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-base-100 shadow-md rounded-xl p-6 hover:shadow-xl transition"
        >
          <FaIdCard className="text-3xl mb-4 text-(--brand)" />
          <h3 className="text-lg font-semibold mb-2 text-(--brand)">
            Identity Verification
          </h3>
          <p className="text-base-content/60 text-sm">
            A valid National ID or Passport is required for identity and KYC
            verification.
          </p>
        </div>

        {/* Income Source */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-base-100  rounded-xl p-6 shadow-md hover:shadow-xl transition"
        >
          <FaMoneyBillWave className="text-3xl mb-4 text-(--brand)" />
          <h3 className="text-lg font-semibold mb-2 text-(--brand)">
            Income Source
          </h3>
          <p className="text-base-content/60 text-sm">
            Applicants must have a stable income source to ensure timely loan
            repayment.
          </p>
        </div>

        {/* Required Documents */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-base-100 rounded-xl p-6 shadow-md hover:shadow-xl transition"
        >
          <FaFileAlt className="text-3xl mb-4 text-(--brand)" />
          <h3 className="text-lg font-semibold mb-2 text-(--brand)">
            Required Documents
          </h3>
          <p className="text-base-content/60 text-sm">
            Income proof, address details, and supporting documents may be
            requested during review.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
