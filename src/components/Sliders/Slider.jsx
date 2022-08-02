import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "./Slider.css";
import { Redirect } from "react-router";

export const Sliders = () => {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="slider"
      style={{ border: "red solid 1px", width: "80%", margin: "auto" }}
    >
      <Slider {...settings}>
        <div>
          <img
            src="https://static.uacdn.net/thumbnail/course/v2/7BC8C549-CE97-4727-9227-BBE3229E5DC5_special_class.png?q=100&w=512"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.uacdn.net/thumbnail/course/v2/7BC8C549-CE97-4727-9227-BBE3229E5DC5_special_class.png?q=100&w=512"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.uacdn.net/thumbnail/course/v2/7BC8C549-CE97-4727-9227-BBE3229E5DC5_special_class.png?q=100&w=512"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.uacdn.net/thumbnail/course/v2/7BC8C549-CE97-4727-9227-BBE3229E5DC5_special_class.png?q=100&w=512"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.uacdn.net/thumbnail/course/v2/7BC8C549-CE97-4727-9227-BBE3229E5DC5_special_class.png?q=100&w=512"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.uacdn.net/thumbnail/course/v2/7BC8C549-CE97-4727-9227-BBE3229E5DC5_special_class.png?q=100&w=512"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.uacdn.net/thumbnail/course/v2/7BC8C549-CE97-4727-9227-BBE3229E5DC5_special_class.png?q=100&w=512"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.uacdn.net/thumbnail/course/v2/7BC8C549-CE97-4727-9227-BBE3229E5DC5_special_class.png?q=100&w=512"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};
