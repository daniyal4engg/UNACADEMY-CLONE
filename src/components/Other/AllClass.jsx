import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SmallCard } from "./SmallCard";
import { Sliders } from "../Sliders/Slider";
import { AchieverSlider } from "../Sliders/AchieverSlider";
import { Card3 } from "../Cards/Card3";

export const AllClass = () => {
  const Sections = styled.section`
    color: #3c4852;
    .main-div {
      display: flex;
      width: 85%;
      margin: auto;
      margin-top: 60px;
      margin-bottom: 100px;
    }
  `;
  const H4 = styled.h4`
    font-size: 32px;
    margin-top: 40px;
  `;

  const P_Tag = styled.p`
    margin: auto;
    font-size: 14px;
    line-height: 150%;
    margin-top: 24px;
    width: 65%;
  `;
  const LeftDiv = styled.div`
    width: 25%;
    .menu {
      margin-bottom: 8px;
      padding: 10px 16px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      color: #3c4852;
      border-radius: 8px;
      :hover {
        background-color: white;
        box-shadow: 0px 4px 16px 0px rgba(233, 238, 242, 0.4);
      }
      span {
        margin-right: 15px;
      }
    }
    .text {
      font-size: 12px;
      margin-top: 50px;
      padding: 5px 16px;
      font-weight: bold;
    }
    h2 {
      font-size: 40px;
      margin-bottom: 50px;
    }
  `;
  const RightDiv = styled.div`
    width: 75%;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    justify-content: space-between;
  `;

  const LinkTag = styled(Link)`
    text-decoration: none;
    border-bottom: #08bd80 1px dashed;
    color: #08bd80;
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 6px;
  `;

  const [data, setData] = useState([]);

  useEffect(() => {
    getDataFun();
  }, []);

  const getDataFun = () => {
    axios
      .get("https://project-server-all.herokuapp.com/all_courses")
      .then((res) => {
        setData([...res.data]);
      });
  };

  return (
    <Sections>
      <div className="main-div">
        <LeftDiv>
          <div className="sub_div">
            <div className="menu">
              <Link to={"/"}>
                <span>
                  <i class="fa fa-home"></i>
                </span>{" "}
                Home
              </Link>
            </div>
            <div className="text">SELF STUDY</div>
            <div className="menu">
              <span>
                <i class="fa fa-safari"></i>
              </span>
              Browse
            </div>
            <div className="menu">
              <span>
                <i class="fa-solid fa-bolt"></i>
              </span>
              Practice
            </div>
            <div className="menu">
              <span>
                <i class="fa-solid fa-font"></i>
              </span>
              Tests
            </div>
            <div className="menu">
              <span>
                <i class="fa-solid fa-address-book"></i>
              </span>
              Syllabus
            </div>
            <div className="menu">
              <span>
                <i class="fa-solid fa-comment-dots"></i>
              </span>
              Doubts & solutions
            </div>
            <div className="menu">
              <span>
                <i class="fa-brands fa-youtube"></i>
              </span>
              Free live classes
            </div>
            <div className="menu">
              <span>
                <i class="fa-brands fa-youtube"></i>
              </span>
              Other courses
            </div>
          </div>
        </LeftDiv>
        <RightDiv>
          {data.map((e) => {
            return (
              <Card3
                imgUrl={e.thumbnail}
                title={e.title}
                subject={e.subject}
                language={e.language}
                time={e.lesson_time}
                educator={e.educator}
              />
            );
          })}
        </RightDiv>
      </div>
    </Sections>
  );
};
