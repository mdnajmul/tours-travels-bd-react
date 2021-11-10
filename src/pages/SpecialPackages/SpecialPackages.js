import React from "react";
import useAuth from "../../hooks/useAuth";
import Special from "../Special/Special";

const SpecialPackages = () => {
  const { specialPackages } = useAuth();
  return (
    <div>
      {specialPackages.length > 0 ? (
        <section id="bangladesh" className="container mt-100">
          <div>
            <h2 className="text-center text-info fw-bold">Special Packages</h2>
            <hr className="text-center text-red fw-bold" />
          </div>
          <div className="home-services-field mt-3">
            {specialPackages.map((p) => (
              <Special key={p._id} package={p}></Special>
            ))}
          </div>
        </section>
      ) : (
        <section className="container mt-100">
          <h2 className="text-center text-danger fw-bold">
            No Pacakage Found!
          </h2>
        </section>
      )}
    </div>
  );
};

export default SpecialPackages;
