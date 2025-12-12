import React, { use, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";
import Loader1 from "../../components/Loader/Loader";
import { Link, useLocation } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Application = () => {
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const { loanDetails } = location.state || {};
  const [loading, setLoading] = useState(false);
  const { user } = use(AuthContext);

  const handleApplyLoan = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const email = user?.email;
    const loanTitle = form.loanTitle.value;
    const category = loanDetails.category;
    const interestRate = form.interestRate.value;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const contact = form.contact.value;
    const nid = form.nid.value;
    const incomeSource = form.incomeSource.value;
    const monthlyIncome = form.monthlyIncome.value;
    const loanAmount = form.loanAmount.value;
    const loanReason = form.loanReason.value;
    const address = form.address.value;
    const extraNotes = form.extraNotes.value;

    const newApplication = {
      email,
      loanTitle,
      interestRate,
      category,
      firstName,
      lastName,
      contact,
      nid,
      incomeSource,
      monthlyIncome,
      loanAmount,
      loanReason,
      address,
      extraNotes,
      status: "pending",
      createdAt: new Date(),
      feeStatus: "unpaid",
    };

    try {
      const res = await axiosSecure.post("/allApplication", newApplication);

      if (res.data) {
        Swal.fire({
          text: "Your application was submitted successfully!",
          icon: "success",
          confirmButtonText: "Close",
        });

        form.reset();
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader1></Loader1>;
  }
  return (
    <div>
      <div
        data-aos="fade-up"
        className="w-[95%] md:w-6/10 mx-auto p-3 md:p-6  rounded-2xl shadow bg-white my-10 text-gray-600"
      >
        <title>FundMate | Apply Loan</title>
        <h1 className="text-2xl font-bold mb-4 text-[#2a6877]">Apply Loan</h1>
        <form onSubmit={handleApplyLoan} className="w-full max-w-3xl mx-auto">
          <div className="flex flex-col gap-2 mb-4">
            <label>User Email</label>
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              readOnly
              className="input w-full border border-[#2a6877] focus:outline-none
          focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
            />
          </div>
          {loanDetails ? (
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6">
              <div className="flex flex-col w-full gap-2 mb-4">
                <label>Loan Title</label>
                <input
                  name="loanTitle"
                  type="text"
                  defaultValue={loanDetails?.loanTitle}
                  readOnly
                  className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 
            focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
                />
              </div>

              <div className="flex flex-col w-full gap-2 mb-4">
                <label>Interest Rate (%)</label>
                <input
                  name="interestRate"
                  defaultValue={loanDetails?.interestRate}
                  readOnly
                  className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 
            focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6">
              <div className="flex flex-col w-full gap-2 mb-4">
                <label>Loan Title</label>
                <input
                  name="loanTitle"
                  type="text"
                  className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 
            focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
                />
              </div>

              <div className="flex flex-col w-full gap-2 mb-4">
                <label>Interest Rate (%)</label>
                <input
                  name="interestRate"
                  className="input w-full border border-[#2a6877] focus:outline-none focus:ring-0 
            focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
                />
              </div>
            </div>
          )}

          {/* USER INPUT SECTION */}
          <h3 className="text-lg font-semibold mb-3 mt-4">
            Personal Information
          </h3>

          {/* First & Last Name */}
          <div className="flex w-full items-center gap-6">
            <div className="flex flex-1 flex-col gap-2 mb-4">
              <label>First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter first name"
                required
                className="input w-full border border-[#2a6877] focus:outline-none 
            focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
              />
            </div>

            <div className="flex flex-1 flex-col gap-2 mb-4">
              <label>Last Name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Enter last name"
                required
                className="input w-full border border-[#2a6877] focus:outline-none 
            focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
              />
            </div>
          </div>

          {/* Contact Number */}
          <div className="flex flex-col gap-2 mb-4">
            <label>Contact Number</label>
            <input
              name="contact"
              type="text"
              placeholder="Enter phone number"
              required
              className="input w-full border border-[#2a6877] focus:outline-none
          focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
            />
          </div>

          {/* National ID */}
          <div className="flex flex-col gap-2 mb-4">
            <label>National ID / Passport Number</label>
            <input
              name="nid"
              type="text"
              placeholder="Enter your NID / Passport ID"
              required
              className="input w-full border border-[#2a6877] focus:outline-none
          focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
            />
          </div>

          {/* Income Source */}
          <div className="flex flex-col gap-2 mb-4">
            <label>Income Source</label>
            <input
              name="incomeSource"
              type="text"
              placeholder="Job, Business, Student, etc."
              required
              className="input w-full border border-[#2a6877] focus:outline-none
          focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
            />
          </div>

          {/* Monthly Income */}
          <div className="flex flex-col gap-2 mb-4">
            <label>Monthly Income</label>
            <input
              name="monthlyIncome"
              type="number"
              placeholder="Enter monthly income"
              required
              className="input w-full border border-[#2a6877] focus:outline-none
          focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
            />
          </div>

          {/* Loan Amount */}
          <div className="flex flex-col gap-2 mb-4">
            <label>Loan Amount</label>
            <input
              name="loanAmount"
              type="number"
              placeholder="Enter desired loan amount"
              required
              className="input w-full border border-[#2a6877] focus:outline-none
          focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
            />
          </div>

          {/* Reason for Loan */}
          <div className="flex flex-col gap-2 mb-4">
            <label>Reason for Loan</label>
            <textarea
              name="loanReason"
              placeholder="Why do you need this loan?"
              required
              className="textarea w-full border border-[#2a6877] focus:outline-none
          focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
            ></textarea>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2 mb-4">
            <label>Address</label>
            <textarea
              name="address"
              placeholder="Full address"
              required
              className="textarea w-full border border-[#2a6877] focus:outline-none
          focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
            ></textarea>
          </div>

          {/* Extra Notes */}
          <div className="flex flex-col gap-2 mb-4">
            <label>Extra Notes</label>
            <textarea
              name="extraNotes"
              placeholder="Any additional info (optional)"
              className="textarea w-full border border-[#2a6877] focus:outline-none
          focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
            ></textarea>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center justify-center md:justify-between gap-5 mt-3">
            <Link
              to="/"
              className="rounded-md text-xs md:text-sm cursor-pointer py-2.5 md:py-1.5
            px-1 md:px-12 bg-transparent border-2 border-[#2a6877] font-semibold text-[#2a6877] hover:bg-[#2a6877] hover:text-white  
            w-full sm:w-auto transition-all duration-200 text-center"
            >
              Back
            </Link>

            <button
              type="submit"
              className="bg-[#2a6877]
      text-white shadow-lg shadow-[#2a687722]
      hover:bg-[#24555e]  text-xs md:text-sm rounded-md font-bold cursor-pointer 
            py-3 md:py-2 px-2 md:px-7 transition-all duration-200 
            w-full sm:w-auto"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Application;
