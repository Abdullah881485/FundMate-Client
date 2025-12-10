import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Card from "../Card/Card";

const AvailableLoans = () => {
  const axiosSecure = useAxiosSecure();

  const { data: loans = [] } = useQuery({
    queryKey: ["allLoan"],
    queryFn: async () => {
      const res = await axiosSecure.get("/availableLoan");
      return res.data;
    },
  });
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="title-text text-center font-bold text-3xl">
        Available Loans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {loans.map((loan) => (
          <Card key={loan._id} loan={loan}></Card>
        ))}
      </div>
    </div>
  );
};

export default AvailableLoans;
