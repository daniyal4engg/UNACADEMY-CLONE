import React from "react";
import styled from "styled-components";

export const Top = () => {
  const [showCat, setShowCat] = React.useState(false);

  const handleChange = (e) => {
    let data = e.target.value;
    console.log("data:", data);
  };

  return (
    <div style={{ backgroundColor: "rgb(244,249,253)" }}>
      <OuterDiv>
        <MainDiv>
          <h1 style={styleForH1}>Choose your goal</h1>
          <div style={inputDiv}>
            <Input
              type="text"
              placeholder="Search for your goal"
              onKeyUp={handleChange}
            />
          </div>
        </MainDiv>
      </OuterDiv>
    </div>
  );
};

const OuterDiv = styled.div`
  background-image: url(https://static.uacdn.net/production/_next/static/images/goal/managegoal-k12-light.svg);
  background-position: right bottom;
  background-repeat: no-repeat;
  text-align: center;
  transition: background 1s ease-in-out 0s;
  height: 266px;
  max-width: 1136px;
  margin: auto;
  text-align: center;
`;

const inputDiv = {
  // border: "1px solid red",
  width: "340px",
  height: "50px",
  marginTop: "30px",
  border: "1px solid #E9EEF2",
};

const Input = styled.input`
  border: none;
  padding: 10px;
  width: 100%;
  height: 100%;
  border: #e9eef2;
  background-color: #ffffff;
  &:focus {
    outline: none;
  }
`;

const MainDiv = styled.div`
  max-width: 1136px;
  margin: auto;
  text-align: left;
  position: relative;
  z-index: 1;
`;

const styleForH1 = {
  fontWeight: "bold",
  fontSize: "40px",
  lineHeight: "150%",
  color: "#3C4852",
  margin: "0px",
  paddingTop: "64px",
};

const Button1 = styled.button`
  margin: 0px;
  padding: 10px 12px;
  overflow: hidden;
  position: relative;
  max-width: 264px;
  min-width: 204px !important;
  box-sizing: border-box;
  min-height: 48px;
  text-align: center;
  flex-shrink: 0;
  font-family: "Roboto Helvetica Arial sans-serif";
  white-space: normal;
  letter-spacing: 0.02857rem;
  font-size: 20px;
  font-weight: bold;
  opacity: 1;
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  outline: 0px;
  align-items: center;
  user-select: none;
  border-radius: 0px;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 76px;
`;
const Span = styled.span`
  height: 20px;
  left: 192px;
  top: 265px;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif !important;
  letter-spacing: 1.5px;
`;

const LineThrough = styled.span`
  position: relative;
  width: 180px;
  background-color: #3c4852;
  height: 4px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 5px 5px 0px 0px;
`;
