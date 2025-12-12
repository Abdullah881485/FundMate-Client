import axios from "axios";
import { use, useEffect } from "react";
import { AuthContext } from "../Provider/AuthContext";

const axiosSecure = axios.create({
  baseURL: "https://fundmate-server.vercel.app",
});

const useAxiosSecure = () => {
  const { user } = use(AuthContext);
  // console.log(user);
  // console.log(user?.accessToken);

  useEffect(() => {
    axiosSecure.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${user?.accessToken}`;
        return config;
      },
      [user]
    );
  });

  return axiosSecure;
};

export default useAxiosSecure;
