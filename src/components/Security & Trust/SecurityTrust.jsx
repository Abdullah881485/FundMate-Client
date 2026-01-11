import React from "react";
import { ShieldCheck, Lock, Users } from "lucide-react";

const SecurityTrust = () => {
  return (
    <section className="relative my-20">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#2a687715] via-transparent to-[#2a687715] blur-3xl" />

      <div className="w-[90%] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold title-text">
            Security & Trust
          </h2>
          <p className="text-base-content/60 max-w-2xl mx-auto mt-3">
            Built with industry-grade security practices to protect your data,
            identity, and financial transactions.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Cards */}
          <div data-aos="fade-right" className="space-y-6">
            {/* Card */}
            <div className="group p-6 rounded-2xl  bg-base-100/80 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#2a6877]/10 text-(--brand) group-hover:scale-110 transition">
                  <ShieldCheck size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-(--brand)">
                    Secure Authentication
                  </h3>
                  <p className="text-base-content/60 mt-1">
                    Firebase Authentication with JWT ensures only verified users
                    can access dashboards and private routes.
                  </p>
                </div>
              </div>
            </div>

            {/* Card */}
            <div className="group p-6 rounded-2xl  bg-base-100/80 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#2a6877]/10 text-(--brand) group-hover:scale-110 transition">
                  <Lock size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-(--brand)">
                    Encrypted Data Storage
                  </h3>
                  <p className="text-base-content/60 mt-1">
                    Sensitive data is securely stored in MongoDB using protected
                    environment variables and server-side validation.
                  </p>
                </div>
              </div>
            </div>

            {/* Card */}
            <div className="group p-6 rounded-2xl  bg-base-100/80 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#2a6877]/10 text-(--brand) group-hover:scale-110 transition">
                  <Users size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-(--brand)">
                    Role-Based Access Control
                  </h3>
                  <p className="text-base-content/60 mt-1">
                    Borrower, Manager, and Admin roles ensure strict permission
                    control across all features.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div data-aos="fade-left" className="flex justify-center relative">
            <img
              src="https://i.ibb.co.com/DPy6mGKz/security-concept-secure-information-3d-render-personal-data-free-png.png"
              alt="Security Illustration"
              className="w-full max-w-md drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTrust;
