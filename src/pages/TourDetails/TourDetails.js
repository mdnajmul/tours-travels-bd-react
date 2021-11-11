import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "./TourDetails.css";

const TourDetails = () => {
  let { tourId } = useParams();
  const [tourPackage, setTourPackage] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/tourpackages/${tourId}`)
      .then((res) => res.json())
      .then((data) => setTourPackage(data));
  }, []);

  const {
    _id,
    name,
    price,
    detailImg1,
    detailImg2,
    detailImg3,
    type,
    duration,
    shortDetail,
    visitedPlaces,
    facility,
    catagory,
    rating,
  } = tourPackage;
  return (
    <section className="container mt-5">
      <h2 className="text-center text-success fw-bold mt-100">{name}</h2>

      <div className="img-detail">
        <div>
          <img className="img-fluid" src={detailImg1} alt="" />
        </div>
        <div>
          <img className="img-fluid" src={detailImg2} alt="" />
        </div>
        <div>
          <img className="img-fluid" src={detailImg3} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5 border-end">
          <h3 className="text-center text-success fw-bold">About Spot</h3>
          <p className="txt-justify">{shortDetail}</p>
          <h3 className="text-center text-success fw-bold">Visited Places</h3>
          <p className="txt-justify">{visitedPlaces}</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5">
          <h3 className="text-center text-success fw-bold">
            Facility Included
          </h3>
          <p className="txt-justify">{facility}</p>
          <p>
            <span className="text-info fw-bold">Total Duration: </span>
            {duration}
          </p>
          <p>
            <span className="text-info fw-bold">Type: </span>
            <span className="text-danger fw-bold">{type}</span>
          </p>
          <p>
            <span className="text-info fw-bold">Total Cost: </span>
            <span className="text-danger fw-bold">BDT {price}</span>
            <span className="text-primary"> (Per Person)</span>
          </p>
          <p>
            <span className="text-info fw-bold">Catagory: </span>
            <span className="text-primary fw-bold">{catagory}</span>
          </p>
          <p>
            <span className="text-info fw-bold">Review: </span>
            <Rating
              initialRating={rating}
              emptySymbol="far fa-star icon-color"
              fullSymbol="fas fa-star icon-color"
              readonly
            ></Rating>
          </p>
          <p className="mt-4">
            <NavLink
              className="text-decoration-none header-top-btn"
              to={`/shipping/${_id}`}
            >
              Book Now
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TourDetails;
