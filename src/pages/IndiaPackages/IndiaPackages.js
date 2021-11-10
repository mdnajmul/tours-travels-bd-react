import React from "react";
import useAuth from "../../hooks/useAuth";
import Package from "../Package/Package";

const IndiaPackages = () => {
  const { packages } = useAuth();
  const indiaPackages = packages.filter((p) => p.catagory === "India");
  return (
    <section id="india" className="container mt-5">
      <div>
        <h2 className="text-center text-success fw-bold">India Tour</h2>
        <hr className="text-center text-red fw-bold" />
      </div>
      <div className="home-services-field mt-3">
        {indiaPackages.map((p) => (
          <Package key={p._id} package={p}></Package>
        ))}
      </div>
    </section>
  );
};

export default IndiaPackages;
