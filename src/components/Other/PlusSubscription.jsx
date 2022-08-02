import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SmallCard } from "./SmallCard";

export const PlusSubscription = () => {
  const Sections = styled.section`
    border-radius: 8px;
    position: relative;
    top: 100px;
    text-align: center;
    margin: auto;
    padding: 80px 96px 0 96px;
    width: 70%;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 16px 32px 0px rgba(233, 238, 242, 0.4);
    color: #3c4852;
  `;

  const DivBox = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 80px;
  `;

  const BottomDiv = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding-top: 50px;
    padding-bottom: 50px;
    border-top: solid 1px #e9eef2;
  `;

  const H3 = styled.h3`
    font-size: 24px;
    line-height: 120%;
    color: #3c4852;
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
      .get("https://project-server-all.herokuapp.com/Plus_Subscription")
      .then((res) => {
        setData([...res.data]);
      });
  };

  console.log(data);

  return (
    <Sections className="introduction-section">
      <div className="introduction">
        <h1>Plus subscription</h1>
        <p>Your access to the best of Unacademy</p>
      </div>
      <DivBox>
        {data.map((e, index) => {
          return (
            <SmallCard
              key={index}
              imgUrl={e.img}
              title={e.title}
              desc={e.desc}
            />
          );
        })}
      </DivBox>

      <BottomDiv>
        <div>
          <H3>
            IIT JEE - PLUS subscription starts <br /> from
            <span style={{ color: "#2d81f7", paddingLeft: "5px" }}>
              ₹1,576/month
            </span>
          </H3>
        </div>

        <div>
          <LinkTag to={"/subscription"}>View pricing</LinkTag>
        </div>
      </BottomDiv>
    </Sections>
  );
};
