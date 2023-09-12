import React, { useState, useEffect } from "react";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/567451/pexels-photo-567451.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1115695/pexels-photo-1115695.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1835660/pexels-photo-1835660.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1620798/pexels-photo-1620798.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2827075/pexels-photo-2827075.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 4 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 0 : currentSlide + 1);
  };

  // Function to automatically move to the next slide
  const autoMoveToNextSlide = () => {
    setCurrentSlide((prev) => (prev === 4 ? 0 : prev + 1));
  };

  useEffect(() => {
    // Set up an interval to move to the next slide every 5 seconds
    const intervalId = setInterval(autoMoveToNextSlide, 5000);

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
        <img src={data[4]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
