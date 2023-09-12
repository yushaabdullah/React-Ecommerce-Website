import React from "react";
import Slider from "../../Components/Slider/Slider";
import "./Home.scss";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="Featured" />
      <FeaturedProducts type="Trending" />
    </div>
  );
};

export default Home;
