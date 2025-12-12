import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" mt-10 ">
      <footer className="w-[90%] mx-auto py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-600">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-gray-700">
            Fund<span className="text-[#2a6877]">Mate</span>
          </h2>
          <p className="mt-4 text-sm leading-6">
            Your trusted platform for managing loans, finances and goals. Smart,
            secure, and built to simplify your financial journey.
          </p>

          {/* Social */}
          <div className="flex items-center gap-4 mt-5">
            <a className="text-gray-500 hover:text-[#2a6877] text-xl" href="#">
              <FaFacebook />
            </a>
            <a className="text-gray-500 hover:text-[#2a6877] text-xl" href="#">
              <FaInstagram />
            </a>
            <a className="text-gray-500 hover:text-[#2a6877] text-xl" href="#">
              <FaLinkedin />
            </a>
            <a className="text-gray-500 hover:text-[#2a6877] text-xl" href="#">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-lg mb-4 font-semibold text-gray-700">Services</h6>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#2a6877] cursor-pointer">Branding</li>
            <li className="hover:text-[#2a6877] cursor-pointer">Design</li>
            <li className="hover:text-[#2a6877] cursor-pointer">Marketing</li>
            <li className="hover:text-[#2a6877] cursor-pointer">
              Advertisement
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-lg mb-4 font-semibold text-gray-700">Company</h6>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#2a6877] cursor-pointer">About Us</li>
            <li className="hover:text-[#2a6877] cursor-pointer">Contact</li>
            <li className="hover:text-[#2a6877] cursor-pointer">Jobs</li>
            <li className="hover:text-[#2a6877] cursor-pointer">Press Kit</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-lg mb-4 font-semibold text-gray-700">Legal</h6>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#2a6877] cursor-pointer">
              Terms of Use
            </li>
            <li className="hover:text-[#2a6877] cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-[#2a6877] cursor-pointer">
              Cookie Policy
            </li>
          </ul>
        </div>
      </footer>

      {/* Bottom Line */}
      <div className="border-t border-gray-200 py-4">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} FundMate — All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
