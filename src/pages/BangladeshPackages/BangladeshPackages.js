import React from "react";
import useAuth from "../../hooks/useAuth";
import Package from "../Package/Package";
import "./BangladeshPackages.css";

const BangladeshPackages = () => {
  const { packages } = useAuth();
  const bangladeshPackages = packages.filter(
    (p) => p.catagory === "Bangladesh"
  );
  return (
    <div>
      {bangladeshPackages.length > 0 && (
        <section id="bangladesh" className="container mt-5">
          <div>
            <h2 className="text-center text-success fw-bold">
              Bangladesh Tours
            </h2>
            <hr className="text-center text-red fw-bold" />
          </div>
          <div className="home-services-field mt-3">
            {bangladeshPackages.map((p) => (
              <Package key={p._id} package={p}></Package>
            ))}
          </div>
          <div>
            <hr className="text-center text-red fw-bold" />
          </div>
        </section>
      )}
    </div>
  );
};

export default BangladeshPackages;
