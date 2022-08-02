import styled from "styled-components";

export const Card3 = ({ imgUrl, title, language, subject, time, educator }) => {
  const CardDiv = styled.div`
    border-radius: 8px;
    width: 270px;
    height: 312px;
    margin-top: 40px;
    box-shadow: 0px 16px 32px 0px rgba(233, 238, 242, 0.4);
  `;

  const InnerDiv = styled.div`
    text-align: left;
    background-color: white;
    border-radius: 8px;
    position: relative;
    box-shadow: 0px 16px 40px 0px rgba(233, 238, 242, 0.4);
  `;

  const ImgDiv = styled.div`
    width: 100%;
    border-radius: 8px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  `;
  const TextDiv = styled.div`
    padding: 24px 10px;

    .lang {
      background-color: rgba(233, 238, 242, 0.4);

      font-size: 10px;
      font-weight: bold;
      padding: 6px 6px;
      border-radius: 4px;
    }
    h3 {
      font-size: 14px;
      line-height: 150%;
      margin-top: 8px;
      margin-bottom: 4px;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .info,
    .edu {
      font-size: 12px;
      line-height: 150%;
      margin-bottom: 4px;
    }

    .edu {
      margin-top: 8%;
    }
    .sub {
      color: #de4b9b;
      font-size: 12px;
      padding: 6px;
      font-weight: 600;
    }
  `;

  return (
    <CardDiv>
      <InnerDiv>
        <ImgDiv>
          <img src={imgUrl} alt="" />
        </ImgDiv>
        <TextDiv>
          <span className="lang">{language}</span>
          <span className="sub">{subject}</span>
          <h3>{title}</h3>

          <div className="info">
            <span></span> {time}
          </div>
          <div className="edu">
            <span></span> {educator}
          </div>
        </TextDiv>
      </InnerDiv>
    </CardDiv>
  );
};
