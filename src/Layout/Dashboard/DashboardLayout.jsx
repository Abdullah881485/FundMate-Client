import React, { use } from "react";
import { FaHome, FaUsers } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { MdPendingActions } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineFileAdd } from "react-icons/ai";
import {
  GrDocumentConfig,
  GrDocumentVerified,
  GrDocumentText,
} from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../../Provider/AuthContext";
const DashboardLayout = () => {
  const { user } = use(AuthContext);
  console.log(user);

  const getLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#2a6877" : "",
      borderLeft: isActive ? "3px solid #2a6877" : "none",
      borderRadius: isActive ? "0" : "0",
    };
  };
  return (
    <div className="w-[85%] py-5 mx-auto drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className=" flex justify-between w-full">
          <div className="flex items-center">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4">
              <h1 className=" font-bold text-2xl text-gray-700">
                Fund<span className="text-[#2a6877]">Mate</span>
              </h1>
            </div>
          </div>

          <img
            className="object-cover rounded-full w-10 border"
            src="https://i.ibb.co.com/67tscvBq/smiling-man-with-arms-crossed-on-transparent-background-png.png"
            alt=""
          />
        </nav>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible shadow-md">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full py-20 flex-col items-start is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow space-y-2">
            {/* List item */}
            <li>
              <NavLink
                style={getLinkStyle}
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Home Page"
              >
                <FaHome size={18} />
                <span className="is-drawer-close:hidden">Home Page</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={getLinkStyle}
                to="/dashboard-layout/manage-users"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Manage Users"
              >
                <FaUsers size={18} />
                <span className="is-drawer-close:hidden">Manage Users</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                style={getLinkStyle}
                to="/dashboard-layout/allDisplayedLoans"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="All Loans"
              >
                <GiReceiveMoney size={18}></GiReceiveMoney>
                <span className="is-drawer-close:hidden">All Loans</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={getLinkStyle}
                to="/dashboard-layout/loanApplication"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Loan Application"
              >
                <GrDocumentText size={18} />
                <span className="is-drawer-close:hidden">Loan Application</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={getLinkStyle}
                to="/dashboard-layout/addLoan"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Add Loan"
              >
                <AiOutlineFileAdd size={18} />
                <span className="is-drawer-close:hidden">Add Loan</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={getLinkStyle}
                to="/dashboard-layout/manageLoan"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Manage Loan"
              >
                <GrDocumentConfig size={18} />
                <span className="is-drawer-close:hidden">Manage Loan</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={getLinkStyle}
                to="/dashboard-layout/pendingApplication"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Pending Application"
              >
                <MdPendingActions size={18} />
                <span className="is-drawer-close:hidden">
                  Pending Application
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={getLinkStyle}
                to="/dashboard-layout/approvedApplication"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Approved Application"
              >
                <GrDocumentVerified size={18} />
                <span className="is-drawer-close:hidden">
                  Approved Application
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={getLinkStyle}
                to="/dashboard-layout/myProfile"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Profile"
              >
                <CgProfile size={18} />
                <span className="is-drawer-close:hidden">My Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={getLinkStyle}
                to="/dashboard-layout/myLoans"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Loans"
              >
                <FaMoneyCheckDollar size={18} />
                <span className="is-drawer-close:hidden">My Loans</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
