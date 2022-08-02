import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "./Slider.css";
import { Redirect } from "react-router";

export const AchieverSlider = () => {
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
    padding-left: 40px;
    margin-top: 50px;
  `;

  const Card = styled.div`
    position: relative;
    color: #905318;
    text-align: center;
    background-color: #fff0d0;

    border-radius: 12px;
    background-image: url(https://static.uacdn.net/production/_next/static/images/achieversCard/web_top_ranker_info.svg);

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    justify-content: center;
    box-sizing: content-box;
    margin-right: 20px;
    text-align: center;
    padding: 30px 0;
    h3 {
      margin-top: 15px;
    }
  `;
  const Div1 = styled.div`
    border: 2px solid #ffdc96;
    border-radius: 50%;
    width: 84px;
    height: 84px;
    text-align: center;
    margin: auto;
    img {
      width: 100%;
    }
  `;
  const Div2 = styled.div`
    text-align: center;
    color: #905318;
    background: #fff0d0;
    border-radius: 40px;
    padding: 8px 10px;
    font-size: 12px;
    font-weight: bold;
    width: 30%;
    margin: auto;
    margin-top: 12px;
    background-image: url(https://static.uacdn.net/production/_next/static/images/achieversCard/air_pill_large.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `;

  const Div3 = styled.div`
    text-align: center;
    font-size: 14px;
    margin: auto;
    width: 70%;
    margin-top: 12px;
  `;

  const Button = styled.button`
    text-align: center;
    background: #905315;
    border-radius: 8px;
    padding: 16px 30px;
    margin-top: 20px;
    width: fit-content;
    font-size: 14px;
    :hover {
      box-shadow: 0px 16px 32px 0px rgb(233 238 242 / 40%);
      transform: translate(0px, -2px);
    }
  `;

  const CardS = styled.div`
    background-image: url(https://static.uacdn.net/production/_next/static/images/achieversCard/web_testimonial.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #fff0d0;
    color: #905318;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 12px;
    height: 100%;
    .quats {
      width: 40px;
      height: 40px;
      margin: auto;
      margin-top: 20px;
    }
    .text-s {
      font-size: 20px;
      line-height: 150%;
      font-weight: 600;
    }
    h5 {
      margin-bottom: 10px;
    }
    .smallPic {
      border: 2px solid #ffdc96;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      text-align: center;
      margin: auto;
      margin-top: 40px;
      margin-bottom: 10px;
      img {
        width: 100%;
      }
    }
  `;

  const CardT = styled.div`
    background-image: url(https://static.uacdn.net/production/_next/static/images/achieversCard/web_other_achievers.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #fff0d0;
    color: #905318;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 12px;
    height: 100%;
    .tree-profile-pic {
      display: flex;
      margin: auto;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
      span {
        width: 60px;
        height: 60px;
        border: 2px solid #ffdc96;
        border-radius: 50%;
      }
      span img {
        width: 100%;
      }
      .middle {
        width: 72px;
        height: 72px;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
    .ranking {
      display: flex;
      justify-content: center;
      width: 60%;
      margin: auto;
      margin-top: 20px;
      div {
        border-radius: 40px;
        padding: 8px 10px;
        font-size: 12px;
        width: auto;
      }
    }
    .name {
      display: flex;
      justify-content: center;
      width: 60%;
      margin: auto;
      font-weight: bold;
      font-size: 14px;
      margin-top: 15px;
    }
    .des {
      font-size: 14px;

      width: 70%;
      margin: auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  `;

  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 2,
    initialSlide: 0,
    // variableWidth: true,
    // slide: ".slick-slideshow__slide",
    //
    // centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
        <Card>
          <Div1>
            <span>
              <img
                src="https://static.uacdn.net/iit_rankers_avatars/amaiya_iit.png"
                alt=""
              />
            </span>
          </Div1>
          <Div2>ALL INDIA RANK 1</Div2>
          <h3>Amaiya Singhal</h3>
          <Div3>
            We congratulate Amaiya for cracking AIR 1 out of 10 lac+ aspirants
            in JEE Main 2021
          </Div3>
          <Button>Watch how they cracked it</Button>
        </Card>
        <CardS>
          <div className="quats">
            <img
              src="https://static.uacdn.net/production/_next/static/images/achieversCard/quotes.svg?q=75&w=1920"
              alt=""
            />
          </div>
          <div className="text-s">
            I am thankful for the recorded classes and doubt solving sessions on
            Unacademy. They helped me learn and revise topics at my own pace
            without getting stuck.
          </div>
          <Div1 className="smallPic">
            <span>
              <img
                src="https://static.uacdn.net/iit_rankers_avatars/amaiya_iit.png"
                alt=""
              />
            </span>
          </Div1>
          <h5>Amaiya Singhal</h5>
        </CardS>
        <CardT>
          <div className="tree-profile-pic">
            <span>
              <img
                src="https://static.uacdn.net/iit_rankers_avatars/pratham_iit.png"
                alt=""
              />
            </span>
            <span className="middle">
              <img
                src="https://static.uacdn.net/iit_rankers_avatars/bratin_iit.png"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://static.uacdn.net/iit_rankers_avatars/tanmey_iit.png"
                alt=""
              />
            </span>
          </div>
          <div className="ranking">
            <Div2>AIR 87</Div2>
            <Div2>AIR 18</Div2>
            <Div2>AIR 334</Div2>
          </div>
          <div className="name">
            <div>Pratham Sahu</div>
            <div>Bratin Mondal</div>
            <div>Tanmey Agarwal</div>
          </div>
          <div className="des">
            Unacademy learners have cracked JEE Main 2021 with flying colors
          </div>
        </CardT>
        <Card>
          <Div1>
            <span>
              <img
                src="https://static.uacdn.net/iit_rankers_avatars/amaiya_iit.png"
                alt=""
              />
            </span>
          </Div1>
          <Div2>ALL INDIA RANK 1</Div2>
          <h3>Amaiya Singhal</h3>
          <Div3>
            We congratulate Amaiya for cracking AIR 1 out of 10 lac+ aspirants
            in JEE Main 2021
          </Div3>
          <Button>Watch how they cracked it</Button>
        </Card>
      </SliderDiv>
    </div>
  );
};
