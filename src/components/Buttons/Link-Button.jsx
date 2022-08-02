import { Link } from "react-router-dom";
import Styled from "styled-components";

export const LinkButton = ({ linkText, classname, icon }) => {
  const LinkButton = Styled(Link)`
    text-decoration: none;
    border-bottom: #08bd80 1px dashed;
    color: #08bd80;
    font-weight: 600;
    font-size: 14px;
    padding-bottom: 3px;
  `;

  return (
    <div className={classname}>
      <LinkButton to={""}>{linkText}</LinkButton>
    </div>
  );
};
