import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CoursesSoonSlider } from "../Sliders/CoursesSoonSlider";

export const CoursesSoon = () => {
  const LinkTag = styled(Link)`
    text-decoration: none;
    border-bottom: #08bd80 1px dashed;
    color: #08bd80;
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 6px;
    pointer-events: none;
  `;

  const DivTop = styled.div`
    display: flex;
    justify-content: space-between;
    div {
      width: auto;
    }
    div h3 {
      font-size: 32px;
      margin-bottom: 12px;
    }
  `;

  return (
    <section style={{ marginTop: "300px", color: "#3C4852" }}>
      <div style={{ width: "85%", margin: "auto" }}>
        <DivTop>
          <div>
            <h3>Courses starting soon</h3>
            <p>
              Enroll in upcoming courses that best suit your schedule and IIT
              JEE exam syllabus
            </p>
          </div>
          <div className="seeAll">
            <LinkTag to={"/jee-main-and-advanced-preparation/all-courses"}>
              See all
            </LinkTag>
          </div>
        </DivTop>
        <div>
          <CoursesSoonSlider />
        </div>
      </div>
    </section>
  );
};
