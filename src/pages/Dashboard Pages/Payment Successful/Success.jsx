import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  // console.log(sessionId);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (sessionId) {
      axiosSecure.patch(`/paymentSuccess?session_id=${sessionId}`).then(() => {
        // console.log(res.data);
      });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div
      
      className="w-9/10 mx-auto flex justify-center items-center flex-col my-20"
    >
      <img
        className="w-70"
        src="https://i.ibb.co.com/tpr3VcrS/free-payment-successful-3543010-2969397.png"
        alt=""
      />
      <h1 className="font-bold text-xl text-center md:text-2xl text-[#2a6877]">
        Application Fee paid Successfully
      </h1>
      <Link
        to="/dashboard-layout/myLoans"
        className="bg-[#2a6877]
      text-white shadow-lg shadow-[#2a687722]
      hover:bg-[#24555e] rounded-md font-bold cursor-pointer py-2 px-7 mt-2 transition duration-300"
      >
        Back
      </Link>
    </div>
  );
};

export default Success;
