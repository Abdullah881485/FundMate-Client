import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";
// import Home from "../../pages/Home/Home";

// Active link style function
const getLinkStyle = ({ isActive }) => {
  return {
    color: isActive ? "#2a6877" : "", // Blue color when active
    borderBottom: isActive ? "2px solid #2a6877" : "none",
    borderRadius: isActive ? "0" : "0", // Underline when active
  };
};

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();
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
      {user ? (
        <li className=" hover:text-[#2a6877]">
          <NavLink to="/dashboard-layout" style={getLinkStyle}>
            Dashboard
          </NavLink>
        </li>
      ) : (
        <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-12">
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
        </div>
      )}
    </>
  );

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You'll be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser()
          .then(() => {
            Swal.fire({
              title: "Logged out!",
              text: "You have successfully logged out.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
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
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn rounded-2xl bg-[#2a6877] px-6 py-2 w-fit font-semibold text-white hover:bg-[#24545c] transition duration-300 "
            >
              Sign Out
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="btn rounded-2xl bg-transparent border-2 border-[#2a6877] px-6 py-2 w-fit font-semibold text-[#2a6877] hover:bg-[#2a6877] hover:text-white transition duration-300 "
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="btn rounded-2xl bg-[#2a6877] px-6 py-2 w-fit font-semibold text-white hover:bg-[#24545c] transition duration-300"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
