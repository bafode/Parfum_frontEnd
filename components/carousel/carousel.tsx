import { Carousel } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { getProducts } from "../../api/apiCore";

function GlobalCarousel() {
  return (
    <Carousel
      interval={2000}
      pause="hover"
      touch={true}
      prevIcon={
        <span aria-hidden="true" className="carousel-control-prev-icon" />
      }
    >
      <Carousel.Item className="carousel-img-container">
        <img
          className="d-block w-100"
          src="/assets/images/slider/100.jpg"
          alt="slider image"
          data-action=""
        />
        <Carousel.Caption className="text-dark">
          <h3>description</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default GlobalCarousel;
