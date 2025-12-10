import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import useRole from "../Hooks/useRole";
import { Loader1 } from "../components/Loader/Loader";

const ManagerRoute = ({ children }) => {
  const { loading, user } = use(AuthContext);
  const { role, roleLoading } = useRole();

  if (loading || !user || roleLoading) {
    return <Loader1></Loader1>;
  }

  if (role !== "Manager") {
    return <h1>Soorry Forbidden Excess</h1>;
  }

  return children;
};

export default ManagerRoute;
