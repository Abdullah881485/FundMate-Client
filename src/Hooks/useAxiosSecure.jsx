import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthContext";

const axiosSecure = axios.create({
  baseURL: "https://fundmate-server.vercel.app",
});

const useAxiosSecure = () => {
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (loading || !user) return;

    const interceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        const token = await user?.accessToken;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosSecure.interceptors.request.eject(interceptor);
    };
  }, [user, loading]);

  return axiosSecure;
};

export default useAxiosSecure;
