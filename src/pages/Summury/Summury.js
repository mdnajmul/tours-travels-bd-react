import {
  faCertificate,
  faGlobe,
  faLuggageCart,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Summury.css";

const Summury = () => {
  return (
    <div className="bg-clr">
      <section className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 mt-5 mb-5">
            <div className="box">
              <p className="text-center icon-color fs-3">
                <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
              </p>
              <h3 className="text-center txt-color fw-bold">50+</h3>
              <h4 className="text-center icon-color">Destinations</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 mt-5 mb-5">
            <div className="box">
              <p className="text-center icon-color fs-3">
                <FontAwesomeIcon icon={faLuggageCart}></FontAwesomeIcon>
              </p>
              <h3 className="text-center txt-color fw-bold">200+</h3>
              <h4 className="text-center icon-color">Special Packages</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 mt-5 mb-5">
            <div className="box">
              <p className="text-center fs-3 icon-color">
                <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
              </p>
              <h3 className="text-center txt-color fw-bold">50,000+</h3>
              <h4 className="text-center icon-color">Satisfied Customers</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 mt-5 mb-5">
            <div className="box">
              <p className="text-center icon-color fs-3">
                <FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon>
              </p>
              <h3 className="text-center txt-color fw-bold">12+</h3>
              <h4 className="text-center icon-color">Years of experience</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Summury;
