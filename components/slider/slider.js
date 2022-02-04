import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderFunc = ({
  transition,
  infinite,
  slideToShow,
  slideToScroll,
  autoPlay,
  autoPlaySpeed,
  children,
  responsive,
}) => {
  const settings = {
    dots: false,
    infinite: infinite,
    speed: transition,
    slidesToShow: slideToShow,
    slidesToScroll: slideToScroll,
    initialSlide: 0,
    autoPlay: autoPlay,
    autoPlaySpeed: autoPlaySpeed,
    arrows: true,
    swipe: true,
    responsive: responsive,
  };
  return (
    <>
      <Slider {...settings}>{children}</Slider>
    </>
  );
};

export default SliderFunc;
