import React from "react";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";
import "./Package.css";

const Package = (props) => {
  const { id, name, img, price, duration, rating } = props.package;
  return (
    <div className="package-field">
      <div className="text-center">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <h2 className="text-center mt-2 fs-6 fw-bold">{name}</h2>
      <p className="ps-3 pe-3">
        <hr />
      </p>
      <p className="text-center">{duration}</p>

      <div className="d-flex justify-content-around">
        <p>
          <span className="fw-bold">Price:</span>{" "}
          <span className="text-danger fw-bold">BDT {price}</span> (Per Person)
        </p>
        <p>
          <Rating
            initialRating={rating}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            readonly
          ></Rating>
        </p>
      </div>
      <p className="ps-3 pe-3">
        <hr />
      </p>
      <div className="mb-3 mt-3">
        <NavLink
          className="text-decoration-none me-3 header-top-btn"
          style={{ marginLeft: "140px" }}
          to={`/servicedetails/${id}`}
        >
          Details
        </NavLink>
      </div>
    </div>
  );
};

export default Package;
