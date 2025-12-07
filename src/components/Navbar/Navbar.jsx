import React from "react";
import { Link, NavLink } from "react-router-dom";
import Home from "../../pages/Home/Home";

// Active link style function
const getLinkStyle = ({ isActive }) => {
  return {
    color: isActive ? "#2a6877" : "", // Blue color when active
    borderBottom: isActive ? "2px solid #2a6877" : "none",
    borderRadius: isActive ? "0" : "0", // Underline when active
  };
};

const Navbar = () => {
  const links = (
    <>
      <li className=" hover:text-[#2a6877]">
        <NavLink to="/" style={getLinkStyle}>
          Home
        </NavLink>
      </li>
      <li className=" hover:text-[#2a6877]">
        <NavLink to="/all-loans" style={getLinkStyle}>
          All-Loans
        </NavLink>
      </li>
      <li className=" hover:text-[#2a6877]">
        <NavLink to="/about-us" style={getLinkStyle}>
          About Us
        </NavLink>
      </li>
      <li className=" hover:text-[#2a6877]">
        <NavLink to="/contact" style={getLinkStyle}>
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="w-[90%] mx-auto">
      <div className="navbar mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </label>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className=" font-bold text-2xl text-gray-700">
            Fund<span className="text-[#2a6877]">Mate</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center px-1 gap-12 text-gray-500  text-[16px] font-medium">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-3">
            <button className="btn rounded-2xl bg-transparent border-2 border-[#2a6877] px-6 py-2 w-fit font-semibold text-[#2a6877] hover:bg-[#2a6877] hover:text-white transition duration-300 ">
              Sign In
            </button>
            <button className="btn rounded-2xl bg-[#2a6877] px-6 py-2 w-fit font-semibold text-white hover:bg-[#24545c] transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
