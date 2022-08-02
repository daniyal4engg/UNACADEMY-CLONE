import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SmallCard } from "./SmallCard";

export const LiveClasses = () => {
  const Sections = styled.section`
    border-radius: 8px;
    position: relative;
    top: 400px;
    margin: auto;
    width: 85%;
    height: 400px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 16px 32px 0px rgba(233, 238, 242, 0.4);
    color: #3c4852;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
  `;

  const LeftDiv = styled.div`
    margin: 80px 96px;
    width: 30%;
    h1 {
      margin-top: 20px;
      font-size: 40px;
      line-height: 120%;
    }
    p {
      margin-top: 12px;
      margin-bottom: 20px;
      font-size: 20px;
      line-height: 150%;
    }
    div {
      margin-top: 12px;
      margin-bottom: 20px;
    }
  `;

  const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    top: -35px;
    margin-right: 100px;
  `;

  const LiveLogo = styled.span`
    padding: 4px 8px;
    background-color: #ffad3b;
    color: white;
    font-weight: bold;
    font-size: 16px;
    border-radius: 5px;
  `;

  const ImgDiv = styled.div`
    width: 35%;
  `;
  const TextDiv = styled.div`
    width: 60%;
    color: #3c4852;
    line-height: 150%;
    h3 {
      font-size: 14px;
      overflow: hidden;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    p {
      font-size: 12px;
      color: #7a8b94;
    }
    span {
      font-size: 12px;
      color: #3c4852;
    }
  `;

  const LinkCard = styled(Link)`
    text-decoration: none;
    width: 400px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 16px 32px 0px rgba(233, 238, 242, 0.4);
    background-color: #ffffff;
    border-radius: 8px;
    box-sizing: border-box;
    img {
      width: 100%;
      border-radius: 5px;
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
      <LeftDiv>
        <LiveLogo>LIVE</LiveLogo>
        <h1>Live Classes</h1>
        <p>Experience Plus for free and start learning from the best</p>
        <div>
          <LinkTag to={"/jee-main-and-advanced-preparation/all-courses"}>
            See all
          </LinkTag>
        </div>
      </LeftDiv>
      <RightDiv>
        {data.map((e) => {
          return (
            <LinkCard to={""}>
              <ImgDiv>
                <img src={e.thumbnail} alt="" />
              </ImgDiv>
              <TextDiv>
                <h3>{e.title}</h3>
                <p>{e.date}</p>
                <span>{e.teacher}</span>
              </TextDiv>
            </LinkCard>
          );
        })}
      </RightDiv>
    </Sections>
  );
};
