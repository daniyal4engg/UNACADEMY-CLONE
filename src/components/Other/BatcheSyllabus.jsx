import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BatcheSlider } from "../Sliders/BatcheSlider";

export const BatcheSyllabus = () => {
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
    <section style={{ marginTop: "550px", color: "#3C4852" }}>
      <div style={{ width: "85%", margin: "auto" }}>
        <DivTop>
          <div>
            <h3>Batches for syllabus completion</h3>
            <p>
              Boost your IIT JEE exam preparation with extensive courses by the
              best educators
            </p>
          </div>
          <div className="seeAll">
            <LinkTag to={""}>See all</LinkTag>
          </div>
        </DivTop>
        <div>
          <BatcheSlider />
        </div>
      </div>
    </section>
  );
};
