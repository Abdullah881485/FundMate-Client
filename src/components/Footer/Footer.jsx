import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 ">
      <div className="w-[90%] mx-auto py-12 flex flex-col gap-5 md:flex-row justify-around items-start md:items-center text-base-content/80">
        <div>
          <h2 className="text-3xl font-bold text-base-content/70 logo">
            Fund<span className="text-(--brand)">Mate</span>
          </h2>
          <p className="mt-4 text-sm leading-6 w-80">
            A simple and secure platform designed to make loan management easier
            and more transparent.
          </p>

          <div className="flex items-center gap-4 mt-5">
            <a
              className="text-base-content/60 hover:text-(--brand) text-xl"
              href="https://facebook.com"
            >
              <FaFacebook />
            </a>
            <a
              className="text-base-content/60 hover:text-(--brand) text-xl"
              href="https://instagram.com"
            >
              <FaInstagram />
            </a>
            <a
              className="text-base-content/60 hover:text-(--brand) text-xl"
              href="https://linkedin.com"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div>
          <h6 className="text-lg mb-4 font-semibold text-base-content/70">
            Company
          </h6>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-(--brand)">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-(--brand)">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg mb-4 font-semibold text-base-content/70">
            Contact Info
          </h6>
          <ul className="space-y-2 text-sm">
            <li>Email: support@fundmate.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      <div className="py-4 border-t border-gray-200">
        <p className="text-center text-sm text-base-content/60">
          © {new Date().getFullYear()} FundMate — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
