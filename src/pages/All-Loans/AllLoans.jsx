import React from "react";
import LoanCard from "./LoanCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllLoans = () => {
  const axiosSecure = useAxiosSecure();

  const { data: loans = [] } = useQuery({
    queryKey: ["allLoan"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allLoan");
      return res.data;
    },
  });
  return (
    <div className="w-[90%] mx-auto">
      <title>FundMate | All Loans</title>
      <h1 className="title-text text-center font-bold text-3xl my-5">
        All Available Loans
      </h1>
      <p className="text-gray-500 text-center text-sm md:text-lg">
        Here you will find detailed information on all loan applications handled
        by the platform.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {loans.map((loan) => (
          <LoanCard key={loan._id} loan={loan}></LoanCard>
        ))}
      </div>
    </div>
  );
};

export default AllLoans;
