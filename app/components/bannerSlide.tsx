"use client";

import React from 'react';
import Slider from 'react-slick';
import Slide from "./slider";

import Image1 from '@/public/banner-1.jpeg';
import Image2 from '@/public/banner-2.jpeg';
import Image3 from '@/public/banner-3.jpeg';

const BannerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: Image1,
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$20",
    },
    {
      id: 1,
      img: Image2,
      title: "Trending Accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "$15",
    },
    {
      id: 2,
      img: Image3,
      title: "Sale Offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$30",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;