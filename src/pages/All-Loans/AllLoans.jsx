import React, { useState } from "react";
import LoanCard from "./LoanCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader1 from "../../components/Loader/Loader";

const AllLoans = () => {
  const axiosSecure = useAxiosSecure();
  const [totalLoans, setTotalLoans] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;
  console.log(totalLoans);

  const {
    data: loans = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allLoan", currentPage],
    queryFn: async () => {
      const skip = (currentPage - 1) * limit;

      const res = await axiosSecure.get(`/allLoan?limit=${limit}&skip=${skip}`);

      setTotalLoans(res.data.total);
      setTotalPage(Math.ceil(res.data.total / limit));

      return res.data.result;
    },
  });
  if (isLoading) {
    return <Loader1></Loader1>;
  }
  const handlePageClick = (page) => {
    setCurrentPage(page);
    refetch();
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      refetch();
    }
  };

  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
      refetch();
    }
  };

  return (
    <div className="w-[90%] mx-auto">
      <title>FundMate | All Loans</title>

      <h1 className="title-text text-center font-bold text-3xl my-5">
        All Available Loans
      </h1>

      <p className="text-base-content/60 text-center text-sm md:text-lg">
        Here you will find detailed information on all loan applications handled
        by the platform.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {loans.map((loan) => (
          <LoanCard key={loan._id} loan={loan} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 flex-wrap my-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded transition 
            ${
              currentPage === 1
                ? " text-gray-400 cursor-not-allowed"
                : " hover:bg-gray-200"
            }`}
        >
          <IoIosArrowBack />
        </button>

        {[...Array(totalPage).keys()].map((i) => {
          const page = i + 1;
          return (
            <button
              key={i}
              onClick={() => handlePageClick(page)}
              className={`px-4 py-2 rounded border transition 
                ${
                  currentPage === page
                    ? "bg-[#2a6877] text-white border-[#2a6877]"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPage}
          className={`px-4 py-2 rounded transition 
            ${
              currentPage === totalPage
                ? " text-gray-400 cursor-not-allowed"
                : " hover:bg-gray-200"
            }`}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default AllLoans;
