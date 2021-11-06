import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Package from "../Package/Package";
import "./BangladeshPackages.css";

const BangladeshPackages = () => {
  const { packages } = useAuth();
  return (
    <section id="bangladesh" className="container mt-5">
      <div>
        <h2 className="text-center text-success fw-bold">Bangladesh Tour</h2>
        <hr className="text-center text-red fw-bold" />
      </div>
      <div className="home-services-field mt-3">
        {packages.map((p) => (
          <Package key={p.id} package={p}></Package>
        ))}
      </div>
    </section>
  );
};

export default BangladeshPackages;
