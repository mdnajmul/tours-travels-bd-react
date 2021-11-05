import React from "react";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BottomNav.css";
import {
  faFacebook,
  faInstagram,
  faPinterestP,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const BottomNav = () => {
  return (
    <div className="mt-5 header">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex mt-4">
            <span className="me-3">
              <FontAwesomeIcon className="me-3 text-clr" icon={faEnvelope} />
              <span className="text-clr" role="button">
                {" "}
                Email Us{" "}
              </span>
              <p className="fw-bold">tours@travels.bd.com</p>
            </span>
            <span className="me-3">
              <FontAwesomeIcon className="me-3 text-clr" icon={faPhoneAlt} />
              <span className="text-clr"> Hotline </span>
              <p className="fw-bold">09612 654321</p>
            </span>
            <span>
              <FontAwesomeIcon className="me-3 text-clr" icon={faClock} />
              <span className="text-clr"> Working Hour </span>
              <p className="fw-bold">10AM - 8PM (Everyday)</p>
            </span>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-10 text-end">
            <span className="text-clr">Follow Us : </span>{" "}
            <FontAwesomeIcon
              className="icon ms-3"
              icon={faFacebook}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="icon"
              icon={faTwitter}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="icon"
              icon={faInstagram}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="icon"
              icon={faYoutube}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="icon"
              icon={faPinterestP}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
