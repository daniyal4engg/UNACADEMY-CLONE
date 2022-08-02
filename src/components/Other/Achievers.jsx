import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SmallCard } from "./SmallCard";
import { Sliders } from "../Sliders/Slider";
import { AchieverSlider } from "../Sliders/AchieverSlider";

export const Achievers = () => {
  const Sections = styled.section`
    width: 85%;
    height: 500px;
    position: relative;
    top: 500px;
    margin: auto;
    background-image: url(https://static.uacdn.net/production/_next/static/images/achieversCard/web_mainbg.svg);
    box-shadow: 0px 16px 32px 0px rgba(233, 238, 242, 0.4);
    border-radius: 8px;
    padding-top: 100px;
    padding-bottom: 60px;
  `;

  const TopDiv = styled.div`
    text-align: center;
    color: #905318;
    width: 40%;
    margin: auto;
    h2 {
      font-size: 32px;
      line-height: 120%;
    }
    div {
      margin-top: 12px;
      font-size: 16px;
      width: 85%;
      margin: auto;
      margin-top: 20px;
    }
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
      .get("https://project-server-all.herokuapp.com/live_classes")
      .then((res) => {
        setData([...res.data]);
      });
  };
  console.log(data);
  return (
    <Sections>
      <TopDiv>
        <h2>Celebrating our achievers</h2>
        <div>
          Unacademy learners are now making waves in the JEE main results.
        </div>
      </TopDiv>
      <div>
        <AchieverSlider />
      </div>
    </Sections>
  );
};
