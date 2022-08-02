import styled from "styled-components";
import { Link } from "react-router-dom";
import { RecentlyCourseSlider } from "../Sliders/RecentlyCourseSlider";

export const RecentlyCourse = () => {
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
            <h3>Recently started courses</h3>
            <p>Start learning live from the best of our ongoing courses</p>
          </div>
          <div className="seeAll">
            <LinkTag to={"/jee-main-and-advanced-preparation/all-courses"}>
              See all
            </LinkTag>
          </div>
        </DivTop>
        <div>
          <RecentlyCourseSlider />
        </div>
      </div>
    </section>
  );
};
