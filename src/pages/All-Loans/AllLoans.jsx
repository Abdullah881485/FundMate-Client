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
    <div>
      <title>FundMate | All Loans</title>
      <h1 className="title-text text-center font-bold text-3xl my-5">
        All Available Loans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {loans.map((loan) => (
          <LoanCard key={loan._id} loan={loan}></LoanCard>
        ))}
      </div>
    </div>
  );
};

export default AllLoans;
