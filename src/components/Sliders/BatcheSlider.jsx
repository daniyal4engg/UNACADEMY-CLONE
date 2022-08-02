import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "./Slider.css";
import { Redirect } from "react-router";
import { useEffect, useState } from "react";
import { Card1 } from "../Cards/Card1";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const BatcheSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataFun();
  }, []);

  const getDataFun = () => {
    axios
      .get("https://project-server-all.herokuapp.com/batches")
      .then((res) => {
        setData([...res.data]);
      });
  };

  console.log("Batcheslider", data);
  const SliderDiv = styled(Slider)`
    .slick-list {
      margin: 0 -0px;
      padding: 0 20% 0 0 !important;
    }
    .slick-slide > div {
      padding: 0 10px;
    }
    .slick-list {
      padding: 0 20% 0 0;
    }
    height: 330px;
    box-sizing: border-box;
    margin-top: 50px;
  `;

  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
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
    <div>
      <SliderDiv {...settings}>
        {data.map((e) => {
          return (
            <Link to={""}>
              <Card1
                imgUrl={e.thumbnail}
                title={e.title}
                language={e.language}
                start={e.started}
                time={e.class_time}
                educator={e.educators}
              />
            </Link>
          );
        })}
      </SliderDiv>
    </div>
  );
};
