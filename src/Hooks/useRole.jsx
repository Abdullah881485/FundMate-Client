import React, { use } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthContext";
import { useQuery } from "@tanstack/react-query";
import Loader1 from "../components/Loader/Loader";

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = use(AuthContext);

  const { isLoading: roleLoading, data: role = "Borrower" } = useQuery({
    queryKey: ["user-role", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}/role`);

      return res.data?.role || "Borrower";
    },
  });
  if ((loading, roleLoading)) {
    return <Loader1></Loader1>;
  }
  return { role, roleLoading };
};

export default useRole;
