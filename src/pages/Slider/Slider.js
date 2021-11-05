import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-400"
          src="./banner/banner-1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-400"
          src="./banner/banner-2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-400"
          src="./banner/banner-3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-400"
          src="./banner/banner-4.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-400"
          src="./banner/banner-5.jpg"
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-400"
          src="./banner/banner-6.jpg"
          alt="Sixth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
