import React from "react";
import Carousel from "./carousel/Carousel";
import PlatformSlider from "./platform-slider/PlatformSlider";
import Shoes from "./products/Shoes";
import Bags from "./products/Bags";
import { Link } from "react-router-dom";

import MoreToLove from "./products/MoreToLove";

const Home = () => {
  return (
    <>
      <div className="homeContainer bannerSection">
        <div className="homeSlider">
          <Carousel />
        </div>
        <Link
          aria-label="promotions"
          class="card p2 flexColumn justify-center align-center promotions"
          to=""
          style={{
            backgroundImage:
              "url('https://wholesalecart.com/static/media/wholesalecart_benifit.91b1d300.png')",
            backgroundSize: "cover",
            boxShadow:
              "rgba(63, 63, 68, 0.1) 0px 0px 0px 1px, rgba(63, 63, 68, 0.24) 0px 0px 8px 0px",
          }}
        ></Link>
      </div>

      <PlatformSlider />
      <Shoes />
      <Bags />
      <MoreToLove />
    </>
  );
};

export default Home;
