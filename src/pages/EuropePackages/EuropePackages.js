import React from "react";
import useAuth from "../../hooks/useAuth";
import Package from "../Package/Package";

const EuropePackages = () => {
  const { packages } = useAuth();
  const europePackages = packages.filter((p) => p.catagory === "Europe");
  return (
    <div>
      {europePackages.length > 0 && (
        <section id="europe" className="container mt-5">
          <div>
            <h2 className="text-center text-success fw-bold">Europe Tours</h2>
            <hr className="text-center text-red fw-bold" />
          </div>
          <div className="home-services-field mt-3">
            {europePackages.map((p) => (
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

export default EuropePackages;
