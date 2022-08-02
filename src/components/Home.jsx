import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./home.css";
import limage from "../images/pp.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="topdiv">
        <h2 className="heading">India’s largest learning platform</h2>
        <Link to={"/explore"}>
          <button id="lb">Start Learning</button>
        </Link>

        <div id="toplink">
          <span>Popular goals</span> <Link to={""}>UPSC CSE - GS</Link>
          <Link to={"/jee-main-and-advanced-preparation"}>IIT JEE</Link>
          <Link to={""}>NEET UG</Link>
          <Link to={""}>NTA-UGC-NET & SET Exams</Link>
          <Link to={""}>Bank Exams</Link>
          <Link to={""}>GATE & ESE</Link>
        </div>
      </div>
      <div className="carddiv">
        <div>
          <img
            src="https://static.uacdn.net/web-cms/dailyliveclasses_0c0023950f_c187155ee3.svg?q=75&w=384&fm=webp"
            alt=""
          />
          <h2>Daily live classes</h2>
          <p>
            Chat with educators, ask questions, answer live polls, and get your
            doubts cleared - all while the class is going on
          </p>
        </div>
        <div>
          <img
            src="https://static.uacdn.net/web-cms/syllabus_a9da21d824_b20b285483.svg?q=75&w=384&fm=webp"
            alt=""
          />
          <h2>Practice and revise</h2>
          <p>
            Learning isn't just limited to classes with our practice section,
            mock tests and lecture notes shared as PDFs for your revision
          </p>
        </div>
        <div>
          <img
            src="https://static.uacdn.net/web-cms/learnanytimeanywhere_cb19d5de30_b92bc0c6a1.svg?q=75&w=384&fm=webp"
            alt=""
          />
          <h2>Learn anytime, anywhere</h2>
          <p>
            One subscription gets you access to all our live and recorded
            classes to watch from the comfort of any of your devices
          </p>
        </div>
      </div>
      <div className="getappdiv">
        <div className="galeft">
          <h2>Get the learning app</h2>
          <p>
            Download lessons and learn anytime, anywhere with the Unacademy app
          </p>
          <div className="appdiv">
            <a href="">
              <img
                className="applink"
                src="https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=128"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="applink"
                src="https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=128"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="mobileimgdiv">
          <img
            className="mobile"
            src="https://static.uacdn.net/production/_next/static/images/newApp.png?q=75&w=640"
            alt=""
          />
        </div>
      </div>
      <div className="startlearningdiv">
        <div>
          <h2>Start learning with Unacademy</h2>
          <p>
            Get unlimited access to structured courses & doubt clearing sessions
          </p>
          <button id="lb">Start Learning</button>
        </div>
        <img src={limage} alt="" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
