import React, { use, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { CiLogin } from "react-icons/ci";
import { RiAccountCircle2Fill } from "react-icons/ri";
import Swal from "sweetalert2";
// import Home from "../../pages/Home/Home";

const getLinkStyle = ({ isActive }) => {
  return {
    color: isActive ? "#2a6877" : "",
    borderBottom: isActive ? "2px solid #2a6877" : "none",
    borderRadius: isActive ? "0" : "0",
  };
};

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = (checked) => {
    setTheme(checked ? "night" : "light");
  };
  const links = (
    <>
      <li className=" hover:text-[#2a6877]">
        <NavLink to="/" style={getLinkStyle}>
          Home
        </NavLink>
      </li>
      <li className=" hover:text-[#2a6877]">
        <NavLink to="/all-loans" style={getLinkStyle}>
          All Loans
        </NavLink>
      </li>
      {user && (
        <li className=" hover:text-[#2a6877]">
          <NavLink to="/dashboard-layout" style={getLinkStyle}>
            Dashboard
          </NavLink>
        </li>
      )}
      <li className=" hover:text-[#2a6877]">
        <NavLink to="/about" style={getLinkStyle}>
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
  // console.log(user);

  return (
    <nav className=" sticky top-0 z-50 glass-bg">
      <div className="navbar mx-auto w-[99%] md:w-[91%]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-xs btn-ghost lg:hidden">
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
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-74 px-2 py-5 shadow">
              {links}
            </ul>
          </div>
          <a className=" font-bold text-2xl md:text-3xl text-base-content/70 logo">
            Fund<span className="text-(--brand)">Mate</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center px-1 gap-12 text-base-content/60  text-[16px] font-medium">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-2 md:mr-6">
            <label className="toggle w-10 text-base-content/80">
              <input
                checked={theme === "night"}
                onChange={(e) => toggleTheme(e.target.checked)}
                type="checkbox"
                value="night"
                className="theme-controller"
              />

              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>
              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
          </div>
          {user ? (
            <div className="flex items-center gap-2 ">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="m-1 cursor-pointer">
                  <img
                    className=" md:w-10 w-8 md:h-10 h-8 object-cover rounded-full"
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/HT6sMcVr/2015-10-06-FB-person.webp"
                    }
                    alt=" not found"
                  />
                </div>
                <div
                  tabIndex={0}
                  className="dropdown-content card card-sm bg-base-300 z-1 shadow-md  p-2 w-70"
                >
                  <div className="card-body  text-base-400 ">
                    <h1 className="text-[15px] font-bold">
                      {user.displayName ? user.displayName : "Anonymous"}
                    </h1>
                    <p className="text-xs font-semibold">{user.email}</p>
                    <div className="pt-2  border-t-2 border-gray-800 space-y-2">
                      <Link
                        to="/dashboard-layout/myProfile"
                        className=" btn btn-sm rounded-xl bg-transparent border-2 border-[#2a6877]  w-full font-semibold text-[#2a6877] hover:bg-[#2a6877] hover:text-white transition duration-300"
                      >
                        <RiAccountCircle2Fill size={20} />
                        Profile
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="btn btn-sm rounded-xl bg-[#2a6877] w-full font-semibold text-white hover:bg-[#24545c] transition duration-300 "
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <button
                onClick={handleSignOut}
                className="btn hidden md:block rounded-2xl bg-[#2a6877]  w-fit font-semibold text-white hover:bg-[#24545c] transition duration-300 "
              >
                Sign Out
              </button> */}
              {/* <button
                onClick={handleSignOut}
                className="text-[#2a6877] block md:hidden "
              >
                <CiLogin size={30} />
              </button> */}
            </div>
          ) : (
            <div className="flex items-center gap-1 md:gap-3">
              <Link
                to="/login"
                className="btn btn-sm md:btn-md rounded-2xl bg-transparent border-2 border-[#2a6877]  w-fit font-semibold text-[#2a6877] hover:bg-[#2a6877] hover:text-white transition duration-300 "
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="btn hidden md:flex btn-xs md:btn-md rounded-2xl bg-[#2a6877]  items-center  w-fit font-semibold text-white hover:bg-[#24545c] transition duration-300"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
