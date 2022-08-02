import styled from "styled-components";
import { Link } from "react-router-dom";
import { BestOfAllTimeSlider } from "../Sliders/BestOfAllTimeSlider";

export const BestOfAllTime = () => {
  const LinkTag = styled(Link)`
    text-decoration: none;
    border-bottom: #08bd80 1px dashed;
    color: #08bd80;
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 6px;
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
    <section style={{ marginTop: "120px", color: "#3C4852" }}>
      <div style={{ width: "85%", margin: "auto" }}>
        <DivTop>
          <div>
            <h3>Best of all time</h3>
            <p>
              Get unlimited access to popular past IIT JEE courses from our top
              educators
            </p>
          </div>
          <div className="seeAll">
            <LinkTag
              to={"/jee-main-and-advanced-preparation/all-courses"}
              style={{ textDecoration: "none" }}
            >
              See all
            </LinkTag>
          </div>
        </DivTop>
        <div>
          <BestOfAllTimeSlider />
        </div>
      </div>
    </section>
  );
};
