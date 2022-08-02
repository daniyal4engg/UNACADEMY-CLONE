import styled from "styled-components";

export const SmallCard = ({ imgUrl, title, desc }) => {
  const Card = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    text-align: left;
    margin-bottom: 80px;
    box-sizing: border-box;
    word-break: break-word;
    img {
      width: 90%;
      box-sizing: border-box;
    }
  `;

  const ImgDiv = styled.div`
    width: 30%;
    margin-right: 10px;
    box-sizing: border-box;
  `;
  const P = styled.p`
    margin-top: 16px;
  `;
  return (
    <Card>
      <ImgDiv>
        <img src={imgUrl} alt="" />
      </ImgDiv>
      <div>
        <h1>{title}</h1>
        <P>{desc}</P>
      </div>
    </Card>
  );
};
