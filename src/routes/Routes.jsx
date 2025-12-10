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
import ManageUsers from "../pages/Dashboard Pages/Manage Users/ManageUsers";
import AllDisplayedLoans from "../pages/Dashboard Pages/All Displayed Loans/AllDisplayedLoans";
import PendingApplication from "../pages/Dashboard Pages/All Pending Application/PendingApplication";
import PrivateRoute from "./PrivateRoute";
import AllLoanApplication from "../pages/Dashboard Pages/All Loan Application/AllLoanApplication";
import AddLoan from "../pages/Dashboard Pages/Add Loan/AddLoan";
import ApprovedApplication from "../pages/Dashboard Pages/Approved Application/ApprovedApplication";
import ManageLoans from "../pages/Dashboard Pages/Manage Loans/ManageLoans";
import MyLoans from "../pages/Dashboard Pages/My Loans/MyLoans";
import MyProfile from "../pages/Dashboard Pages/My Profile/MyProfile";
import { Loader1 } from "../components/Loader/Loader";
import AdminRoute from "./AdminRoute";
import ManagerRoute from "./managerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loader1></Loader1>,
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
        element: (
          <PrivateRoute>
            <Application></Application>
          </PrivateRoute>
        ),
      },
      {
        path: "/loan-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/loanDetails/${params.id}`),
        element: (
          <PrivateRoute>
            <LoanDetails></LoanDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard-layout",
    hydrateFallbackElement: <Loader1>s</Loader1>,
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard-layout",
        index: true,
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "allDisplayedLoans",
        element: (
          <AdminRoute>
            <AllDisplayedLoans></AllDisplayedLoans>
          </AdminRoute>
        ),
      },
      {
        path: "loanApplication",
        element: (
          <AdminRoute>
            <AllLoanApplication></AllLoanApplication>
          </AdminRoute>
        ),
      },
      {
        path: "addLoan",
        element: (
          <ManagerRoute>
            <AddLoan></AddLoan>,
          </ManagerRoute>
        ),
      },
      {
        path: "pendingApplication",
        element: (
          <ManagerRoute>
            <PendingApplication></PendingApplication>
          </ManagerRoute>
        ),
      },
      {
        path: "approvedApplication",
        element: (
          <ManagerRoute>
            <ApprovedApplication></ApprovedApplication>
          </ManagerRoute>
        ),
      },
      {
        path: "manageLoan",
        element: (
          <ManagerRoute>
            <ManageLoans></ManageLoans>
          </ManagerRoute>
        ),
      },
      {
        path: "myLoans",
        element: <MyLoans></MyLoans>,
      },
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
]);
