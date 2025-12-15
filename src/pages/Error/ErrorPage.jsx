import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-base-content/80">404</h1>
        <div className="space-y-2">
          <h2 className="text-4xl font-semibold text-base-content/70">
            Page Not Found
          </h2>
          <p className="text-base-content/60">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-[#2a6877]
      text-white shadow-lg shadow-[#2a687722]
      hover:bg-[#24555e] rounded-lg transition-colors duration-300  hover:shadow-xl"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
