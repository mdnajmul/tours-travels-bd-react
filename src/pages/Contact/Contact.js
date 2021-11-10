import {
  faClock,
  faEnvelope,
  faMapPin,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <section className="container mt-100">
      <div>
        <h2 className="text-center text-success fw-bold">Get in Touch</h2>
        <p className="txt-justify mt-3">
          Tours Travels BD is leading tour operator of Bangladesh.Tours Travels
          BD provides inbound and outbound tour operate. Inbound tours provide
          experience guide, standard and any category’s hotel, best tours spot
          selection and your security.To get any service and support from us,
          please contact us.
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-center text-success fw-bold">The Office</h2>
        <p className="text-center mt-3">
          <FontAwesomeIcon className="me-3 text-danger" icon={faMapPin} />
          <span className="fw-bold">Address:</span> Tours Travels BD. HOUSE #
          16, ROAD # 2, DHANMONDI, DHAKA-1205.
        </p>
        <p className="text-center mt-2">
          <FontAwesomeIcon className="me-3 green-clr" icon={faPhoneAlt} />
          <span className="fw-bold">Phone:</span> 09612 654321
        </p>
        <p className="text-center mt-2">
          <FontAwesomeIcon className="me-3 green-clr" icon={faEnvelope} />
          <span className="fw-bold">Email:</span> tours@travels.bd.com
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-center text-success fw-bold">Business Hours</h2>
        <p className="text-center mt-3">
          <FontAwesomeIcon className="me-3" icon={faClock} />
          10AM - 8PM (Everyday)
        </p>
      </div>
    </section>
  );
};

export default Contact;
