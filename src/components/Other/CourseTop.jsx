
import { Button } from "../Buttons/Button";
import { LinkButton } from "../Buttons/Link-Button";
import { Link } from "react-router-dom";

export const CourseTop = () => {
  return (
    <>
      <div className="courseTopSection">
        <Button
          rapperClass={"img-with"}
          classname={"Blue-Top-Button"}
          btnText={"Experience our 2021 recap"}
          icon={
            "https://static.uacdn.net/production/_next/static/images/winter-logo.svg?q=75&w=32"
          }
        />
        <div>
          <h1>Crack IIT JEE with India's largest learning platform</h1>
        </div>
        <div>
          <p>
            Get Plus subscription and access unlimited live and recorded courses
            from India's best educators
          </p>
        </div>
        
        <div style={{ marginTop: "50px" }}>
         <Button
            rapperClass={"button-link"}
            classname={"green-button"}
            btnText={"Get subscription"}
          />
        </div>
        <div>
          <LinkButton
            linkText={"View subscription offers"}
            className={"link-btn-one"}
          />
        </div>
        <div>Get upto 4 months free with your subscription</div>
      </div>
      <div className="top-left-img">
        <img
          src="https://static.uacdn.net/production/_next/static/images/goal/boy.svg?q=75&w=384"
          alt=""
        />
      </div>
      <div className="top-right-img">
        <img
          src="https://static.uacdn.net/production/_next/static/images/goal/girl.svg?q=75&w=384"
          alt=""
        />
      </div>
    </>
  );
};
