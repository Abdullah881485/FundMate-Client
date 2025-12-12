import React from "react";

const About = () => {
  return (
    <div
      data-aos="fade-up"
      className="w-[90%] md:w-4/5 lg:w-3/5 mx-auto my-16 text-gray-700"
    >
      <title>FundMate | About Us</title>

      <div className="rounded-2xl bg-white shadow-lg p-10 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-[#2a6877]">About FundMate</h1>
          <p className="text-gray-600 mt-3">
            Empowering communities through simple, transparent, and organized
            micro-loan management.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[#2a6877]">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At FundMate, our mission is to simplify the loan management process
            for individuals, small businesses, and community groups. We believe
            financial tools should be easy to use, secure, and accessible to
            everyone—regardless of technical background.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[#2a6877]">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We aim to build a world where financial tracking is stress-free. No
            more notebooks, lost records, or calculation errors—just a simple
            digital system that keeps everything organized for you.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-[#2a6877]">
            What We Offer
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-[#2a6877] text-lg">✔</span>
              <p>Easy loan tracking with automated calculations</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#2a6877] text-lg">✔</span>
              <p>Secure cloud-based data storage</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#2a6877] text-lg">✔</span>
              <p>Role-based access for lenders and borrowers</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#2a6877] text-lg">✔</span>
              <p>Clean, modern dashboard interface</p>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[#2a6877]">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            FundMate is created by a passionate developer who aims to bring
            practical solutions to everyday problems. Our focus is on building
            modern web tools that help people stay organized and financially
            confident.
          </p>
        </div>

        <div className="bg-[#2a6877] text-white p-6 rounded-xl shadow-md">
          <p className="text-center italic leading-relaxed">
            “Financial management doesn’t have to be complicated. With the right
            tools, anyone can achieve clarity and control.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
