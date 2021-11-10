import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-top">
        <section className="container">
          <div className="row text-black">
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 mt-4 mb-3">
              <h3 className="text-white">Most Popular</h3>
              <ul className="text-start">
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">
                      Tourist Destinations
                    </span>
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/aboutus">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">Things to Do</span>
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">
                      Traveller Information
                    </span>
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/aboutus">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">About Us</span>
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">Blog</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 mt-4 mb-3">
              <h3 className="text-white">Top Destinations</h3>
              <ul className="text-start">
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">Bangladesh</span>
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">India</span>
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">Europe</span>
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">Maldive</span>
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">Dubai</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 mt-4 mb-3">
              <h3 className="text-white">Accommodation</h3>
              <ul className="text-start">
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">
                      Resorts in Bangladesh
                    </span>
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">Resorts in India</span>
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">Resorts in Dubai</span>
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">Resorts in Maldive</span>
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">Resorts in Europe</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 mt-4 mb-3">
              <h3 className="text-white">Popular Restaurants</h3>
              <ul className="text-start">
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">Woondal</span>
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">Spicy</span>
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">Etopia</span>
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">Mugal Masala</span>
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link className="text-decoration-none" to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span className="footer-hover-clr">Hotspot</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="footer-bottom">
        <div className="container d-flex justify-content-between pt-4 pb-3">
          <p className="text-white fw-bold">
            &copy; Copyrights {new Date().getFullYear()} Tours Travels BD All
            rights reserved.
          </p>
          <p className="text-white fw-bold">Designed by najmulovi</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
