import styled from "styled-components";

export const Card2 = ({ imgUrl, title, language, subject, time, educator }) => {
  const CardDiv = styled.div`
    border-radius: 8px;
    display: flex;
    align-items: center;
    box-shadow: 0px 16px 32px 0px rgba(233, 238, 242, 0.4);
  `;

  const InnerDiv = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 440px;
    padding: 15px 10px 15px 24px;
    border-radius: 8px;
    margin-left: 40px;
    position: relative;
    padding-left: 210px;
    box-shadow: 0px 16px 40px 0px rgba(233, 238, 242, 0.4);
  `;

  const ImgDiv = styled.div`
    width: 100%;
    border-radius: 8px;
    width: 250px;
    height: 140px;
    box-shadow: 0px 16px 32px 0px rgba(233, 238, 242, 0.4);
    position: absolute;
    left: -40px;
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
      font-size: 16px;
      line-height: 150%;
      text-overflow: ellipsis;
      overflow: hidden;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-top: 8px;
      margin-bottom: 4px;
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
