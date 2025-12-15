import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LoanLottie from "../LottieImage/LottieImage1";

const Banner = () => {
  return (
    <section className="max-w-full  my-10">
      <div className="w-full md:w-[90%] mx-auto">
        <div className="flex items-center justify-around flex-col lg:flex-row ">
          <motion.div
            className="flex flex-col w-full lg:w-1/2  gap-5 px-4 text-start"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="title-text font-bold text-3xl md:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Quick and Easy Loans for Your Financial Needs.
            </motion.h1>

            <motion.p
              className="text-base-content/60 text-[16px] md:text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              Our loan services offer a hassle-free and streamlined borrowing
              experience, providing you with the funds you need in a timely
              manner to meet your financial requirements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <Link
                to="/application"
                className="btn rounded-2xl bg-transparent border-2 border-[#2a6877] px-6 py-2 w-fit font-semibold text-(--brand) hover:bg-[#2a6877] hover:text-white transition duration-300"
              >
                Apply Now
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className=""
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="https://i.ibb.co.com/vvgtp1TS/man-getting-loan-from-bank-5776760-4833683.png"
              alt="Bank illustration"
              className="w-full  object-contain "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
