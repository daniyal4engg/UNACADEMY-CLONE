import { Link } from "react-router-dom";

export const Button = ({ rapperClass, btnText, classname, icon }) => {
  return (
    <Link to={"/subscription"} className={rapperClass}>
      <img src={icon} alt="" />
      <button onClick={() => {}} className={classname} id="Btn">
        {btnText}
      </button>
    </Link>
  );
};
