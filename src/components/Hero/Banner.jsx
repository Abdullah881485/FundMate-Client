import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="w-full my-20">
      <div className="w-[98%] md:w-[90%] mx-auto px-4">
        <div className="flex items-center justify-between flex-col lg:flex-row gap-5">
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="title-text font-bold text-4xl md:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Quick and Easy Loans for Your Financial Needs.
            </motion.h1>

            <motion.p
              className="text-gray-500 text-[16px] md:text-lg"
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
                className="btn rounded-2xl bg-transparent border-2 border-[#2a6877] px-6 py-2 w-fit font-semibold text-[#2a6877] hover:bg-[#2a6877] hover:text-white transition duration-300"
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
              src="https://i.ibb.co.com/JFd5bJXv/home-loan-emi-084305895-16x9-0.jpg"
              alt="Bank illustration"
              className="w-full object-contain rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
