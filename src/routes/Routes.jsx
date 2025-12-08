import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import AllLoans from "../pages/All-Loans/AllLoans";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
import Application from "../pages/Application Form/Application";
import LoanDetails from "../pages/Loan Details/LoanDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/all-loans",
        Component: AllLoans,
      },

      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/application",
        element: <Application></Application>,
      },
      {
        path: "/loan-details",
        element: <LoanDetails></LoanDetails>,
      },
      {
        path: "dashboard-layout",
        element: <DashboardLayout></DashboardLayout>,
        children: [],
      },
    ],
  },
]);
