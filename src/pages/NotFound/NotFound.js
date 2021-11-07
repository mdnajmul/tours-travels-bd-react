import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mt-100">
      <h1 className="text-center text-danger fw-bold">404</h1>
      <h3 className="text-center text-warning mb-5">
        The page you are looking for is not available
      </h3>
      <div className="text-center">
        <button type="button" className="btn login-btn mt-2">
          <Link to="/" className="text-decoration-none text-white">
            Back
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
