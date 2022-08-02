import styled from "styled-components";

export const Card1 = ({ imgUrl, title, language, start, time, educator }) => {
  const CardDiv = styled.div`
    box-shadow: 0px 16px 32px 0px rgb(233 238 242 / 40%);
    background-color: white;
    border-radius: 8px;
    .view-btn {
      text-align: center;
      padding: 20px;
      box-sizing: content-box;
      border-top: 1px rgb(0 0 0 / 12%) solid;
    }
  `;

  const ImgDiv = styled.div`
    width: 100%;
    height: 190px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    img {
      width: 100%;
      object-fit: cover;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  `;
  const TextDiv = styled.div`
    padding: 16px;

    .lang {
      background-color: rgba(233, 238, 242, 0.4);

      font-size: 10px;
      font-weight: bold;
      padding: 6px 6px;
      border-radius: 4px;
    }
    h3 {
      margin-top: 12px;
      margin-bottom: 16px;
      line-height: 150%;
      font-size: 18px;
    }
    .info {
      font-size: 14px;
      line-height: 150%;
      margin-bottom: 12px;
    }
  `;

  return (
    <CardDiv>
      <ImgDiv>
        <img src={imgUrl} alt="" />
      </ImgDiv>
      <TextDiv>
        <span className="lang">{language}</span>
        <h3>{title}</h3>
        <div className="info">
          <span></span> {start}
        </div>
        <div className="info">
          <span></span> {time}
        </div>
        <div className="info">
          <span></span> {educator}
        </div>
      </TextDiv>
      <div className="view-btn">View full schedule</div>
    </CardDiv>
  );
};
