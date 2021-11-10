import React from "react";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";

const Special = (props) => {
  const { _id, name, img, price, oldPrice, duration, rating } = props.package;
  return (
    <div className="package-field">
      <div className="text-center">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <h2 className="text-center mt-2 fs-6 fw-bold">{name}</h2>
      <p className="ps-3 pe-3">
        <hr />
      </p>
      <p className="text-center">
        BDT{" "}
        <span className="text-decoration-line-through text-danger fw-bold">
          {oldPrice}
        </span>
        {"  "}
        <span className="text-success fw-bold">{price}</span> (Per Person)
      </p>
      <p className="text-center">{duration}</p>

      <p className="text-center">
        <Rating
          initialRating={rating}
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
          readonly
        ></Rating>
      </p>

      <div className="mb-3 mt-3">
        <p className="text-center">
          <NavLink
            className="text-decoration-none me-3 header-top-btn"
            to={`/shipping/${_id}?token=special`}
          >
            Book Now
          </NavLink>
        </p>
      </div>
      <p className="ps-3 pe-3">
        <hr />
      </p>
    </div>
  );
};

export default Special;
