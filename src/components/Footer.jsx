import React from "react";
import "./footer.css";

const Footer = () => {
  const COMPANY = [
    "About us",
    "Careers",
    "Blogs",
    "Privacy Policy",
    "Terms and Conditions",
  ];

  const POPULAR = [
    "IIT JEE",
    "UPSC CSE GS",
    "SSC Exams",
    "CBSE Class 12",
    "NEET UG",
  ];

  const OTHER = [
    "User Guidelines",
    "Site Map",
    "Refund Policy",
    "Takedown Policy",
  ];
  return (
    <div className="footer">
      <div>
        <a href="">
          <img
            className="unimg"
            src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256"
            alt=""
          />
        </a>
        <div className="logos">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
        <p>© 2022 Sorting Hat Technologies Pvt Ltd</p>
      </div>

      <div className="footerp">
        <h1>COMPANY</h1>
        {COMPANY.map((e) => {
          return (
            <p>
              <a href="">{e}</a>
            </p>
          );
        })}
      </div>
      <div className="footerp">
        <h1>POPULAR GOALS</h1>
        {POPULAR.map((e) => {
          return (
            <p>
              <a href="">{e}</a>
            </p>
          );
        })}
      </div>
      <div className="footerp">
        <h1>OTHER LINKS</h1>
        {OTHER.map((e) => {
          return (
            <p>
              <a href="">{e}</a>
            </p>
          );
        })}
      </div>
      <div className="learnerapp">
        <h1>LEARNER APP</h1>
        <div className="appdiv">
          <a href="">
            <img
              className="applink2"
              src="https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=128"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="applink2"
              src="https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=128"
              alt=""
            />
          </a>
        </div>
        <h1>EDUCATOR APP</h1>
        <div className="appdiv">
          <a href="">
            <img
              className="applink2"
              src="https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=128"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="applink2"
              src="https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=128"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
