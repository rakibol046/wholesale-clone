import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousel.css";

const images = [
  "./images/Banner1.19c8da89.jpg",
  "./images/Banner3.9428fc71.jpg",
  "./images/Banner5.3ab0e2e9.jpg",
];

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    customPaging: (i) => <div className="custom-dots"></div>,
  };
  return (
    <section className="hero-slider">
      <div className="single-slider">
        <div className="container">
          <div className="row no-gutters">
            <div>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index}>
                    <img
                      className="slider-img lg:rounded-lg shadow-md"
                      src={image}
                      alt=""
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSlider;
