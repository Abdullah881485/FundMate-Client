import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthContext";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import UserLoanChart from "../../../components/Bar Chart/userBarChart";
import useRole from "../../../Hooks/useRole";
import Loader1 from "../../../components/Loader/Loader";

const DashboardHome = () => {
  const { user, loading } = useContext(AuthContext);
  const { role, roleLoading } = useRole();
  const axiosSecure = useAxiosSecure();

  const { data: myLoans = [], isLoading } = useQuery({
    queryKey: ["myLoanApplication", user?.email],
    enabled: !loading && !!user?.email && !roleLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/myLoanApplication?email=${user.email}`
      );
      return res.data;
    },
  });

  if (loading || roleLoading || isLoading) {
    return <Loader1 />;
  }

  return (
    <div>
      {role === "Borrower" ? (
        <div className="px-0 md:px-8 lg:px-12 py-6">
          <UserLoanChart loans={myLoans} />
        </div>
      ) : (
        <div className="flex flex-col justify-center text-center text-base-content/60 my-20">
          <h1 className="text-title text-4xl font-semibold">
            FundMate Dashboard
          </h1>
          <h1 className="text-lg">You haven't selected any section yet</h1>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
