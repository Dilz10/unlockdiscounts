

import React, { useContext, forwardRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Latestshop.css";
import { ProductContext } from "../contexts/ProductContext";

// Forwarding ref to the component to allow scrolling
const Latestshop = forwardRef((props, ref) => {
  const { state, dispatch } = useContext(ProductContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      image: "/Latestshop/image 1.png",
      description: "Kid's Wear",
      promo: "Explore the latest in kids' fashion",
      link: "/fashion/kids-wear/latest?page=1", 
      query: "mainCategory=kidswear", 
    },
    {
      id: 2,
      image: "/Latestshop/image 2.png",
      description: "Women's Wear",
      promo: "Exclusive women's collections",
      link: "/fashion/womens-wear/latest?page=1",
      query: "mainCategory=womenswear",
    },
    {
      id: 3,
      image: "/Latestshop/image 3.png",
      description: "Men's Wear",
      promo: "Men's fashion that fits every occasion",
      link: "/fashion/mens-wear/latest?page=1",
      query: "mainCategory=menswear",
    },
    {
      id: 4,
      image: "/Latestshop/image 4.png",
      description: "Electronic Gadgets",
      promo: "Top electronics at unbeatable prices",
      link: "/electronics/latest?page=1",
      query: "category=Electronics",
    },
    {
      id: 5,
      image: "/Latestshop/image 5.png",
      description: "Fitness",
      promo: "Gear up for fitness",
      link: "/fitness/latest?page=1",
      query: "category=Fitness",
    },
    {
      id: 6,
      image: "/Latestshop/image 6.png",
      description: "Beauty Products",
      promo: "Enhance your beauty with our products",
      link: "/beauty/latest?page=1",
      query: "mainCategory=beauty",
    },
    {
      id: 7,
      image: "/Latestshop/image 7.png",
      description: "Jewellery & Accessories",
      promo: "Elegance in every piece",
      link: "/jewellery/latest?page=1",
      query: "category=Jewellery",
    },
    {
      id: 8,
      image: "/Latestshop/image 9.png",
      description: "Kitchen Utilities",
      promo: "Essentials for your kitchen",
      link: "/electronics?page=1",
      query: "category=Kitchen%26Table",
    },
  ];

  const handleFetchProducts = async (query) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/banner/latest?${query}`
      );
      const data = await response.json();
      if (data.success && data?.products) {
        dispatch({ type: "SET_PRODUCTS", payload: data.products });
      }
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  return (
    <div className="latest-carousel-container" ref={ref}>
      <h2 className="latest-carousel-heading">SHOP THE LATEST</h2>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="latest-carousel-slide"
            onClick={() => handleFetchProducts(slide.query)}
          >
            <Link to={slide.link}>
              <img
                src={slide.image}
                alt={slide.description}
                className="latest-carousel-image"
              />
              <div className="latest-carousel-description">
                {slide.description}
              </div>
              <div className="latest-carousel-promo">{slide.promo}</div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default Latestshop;

