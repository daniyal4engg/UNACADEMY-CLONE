import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const BestWayToPrepare = () => {
  const Sections = styled.section`
    color: #3c4852;
    .main-div {
      margin: auto;
      margin-top: 170px;
      margin-bottom: 170px;
      width: 85%;
      display: flex;
    }
    .video_div {
      video {
        margin-top: 120px;
      }
    }
  `;
  const H4 = styled.h4`
    font-size: 32px;
    margin-top: 40px;
  `;

  const P_Tag = styled.p`
    margin: auto;
    font-size: 14px;
    line-height: 150%;
    margin-top: 24px;
    width: 65%;
  `;
  const LeftDiv = styled.div`
    div {
      position: sticky;
      top: 80px;
      width: 80%;
    }
    h2 {
      font-size: 40px;
      margin-bottom: 50px;
    }
  `;
  const RightDiv = styled.div`
    text-align: center;
  `;

  const LinkTag = styled(Link)`
    text-decoration: none;
    border-bottom: #08bd80 1px dashed;
    color: #08bd80;
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 6px;
  `;

  return (
    <Sections>
      <div className="main-div">
        <LeftDiv>
          <div>
            <h2>The best way to prepare for IIT JEE</h2>
            <LinkTag to={""}>Get subscription</LinkTag>
          </div>
        </LeftDiv>
        <RightDiv>
          <div>
            <video loop muted autoPlay playsinline>
              <source
                data-src="https://static.uacdn.net/web-cms/schedule_055b9bfa23.webm"
                type="video/webm"
                src="https://static.uacdn.net/web-cms/schedule_055b9bfa23.webm"
              />
              <source
                data-src="https://static.uacdn.net/web-cms/schedule_fe9ee5d4e7.mp4"
                type="video/mp4"
                src="https://static.uacdn.net/web-cms/schedule_fe9ee5d4e7.mp4"
              />
            </video>
            <H4>Schedule that works for you</H4>
            <P_Tag>
              Enroll in unlimited courses, get a personalised schedule and never
              miss a live class with our timely reminders
            </P_Tag>
          </div>

          <div className="video_div">
            <video loop muted autoPlay playsinline>
              <source
                data-src="https://static.uacdn.net/web-cms/language_d56e370f78.webm"
                type="video/webm"
                src="https://static.uacdn.net/web-cms/language_d56e370f78.webm"
              />
              <source
                data-src="https://static.uacdn.net/web-cms/language_9bdb488c01.mp4"
                type="video/mp4"
                src="https://static.uacdn.net/web-cms/language_9bdb488c01.mp4"
              />
            </video>
            <H4>No Language barrier</H4>
            <P_Tag>
              Our educators teach in English, Hindi, Malayalam, Tamil and 12
              other languages, so language is never a barrier
            </P_Tag>
          </div>

          <div className="video_div">
            <video loop muted autoPlay playsinline>
              <source
                data-src="https://static.uacdn.net/web-cms/practice_2202d81863.webm"
                type="video/webm"
                src="https://static.uacdn.net/web-cms/practice_2202d81863.webm"
              />
              <source
                data-src="https://static.uacdn.net/web-cms/practice_1f2b489fe1.mp4"
                type="video/mp4"
                src="https://static.uacdn.net/web-cms/practice_1f2b489fe1.mp4"
              />
            </video>
            <H4>Learn anytime, anywhere</H4>
            <P_Tag>
              Watch our recorded classes, online or offline from the comfort of
              your mobile, PC or tablet
            </P_Tag>
          </div>
        </RightDiv>
      </div>

      <div className="main-div">
        <LeftDiv>
          <div>
            <h2>Feels like you are in the classroom</h2>
            <LinkTag to={""}>Get subscription</LinkTag>
          </div>
        </LeftDiv>
        <RightDiv>
          <div>
            <video loop muted autoPlay playsinline>
              <source
                data-src="https://static.uacdn.net/web-cms/chatting_f25584317b.webm"
                type="video/webm"
                src="https://static.uacdn.net/web-cms/chatting_f25584317b.webm"
              />
              <source
                data-src="https://static.uacdn.net/web-cms/chatting_b0fd3b34ea.mp4"
                type="video/mp4"
                src="https://static.uacdn.net/web-cms/chatting_b0fd3b34ea.mp4"
              />
            </video>
            <H4>Interact with your educator</H4>
            <P_Tag>
              Chat with the educator, engage in discussions and ask your
              questions - all while the class is going on
            </P_Tag>
          </div>

          <div className="video_div">
            <video loop muted autoPlay playsinline>
              <source
                data-src="https://static.uacdn.net/web-cms/polls_362dafb5eb.webm"
                type="video/webm"
                src="https://static.uacdn.net/web-cms/polls_362dafb5eb.webm"
              />
              <source
                data-src="https://static.uacdn.net/web-cms/polls_9dd8a3c6e0.mp4"
                type="video/mp4"
                src="https://static.uacdn.net/web-cms/polls_9dd8a3c6e0.mp4"
              />
            </video>
            <H4>Answer live polls</H4>
            <P_Tag>
              Participate in live polls by the educator in class and compete for
              a place in the leaderboard
            </P_Tag>
          </div>

          <div className="video_div">
            <video loop muted autoPlay playsinline>
              <source
                data-src="https://static.uacdn.net/web-cms/question_9baa1f946f.mp4"
                type="video/mp4"
                src="https://static.uacdn.net/web-cms/question_9baa1f946f.mp4"
              />
            </video>
            <H4>Get your doubts cleared</H4>
            <P_Tag>
              Ask your doubts and get them answered immediately by the educator
              during classes
            </P_Tag>
          </div>
        </RightDiv>
      </div>
      {/* ================== */}
      <div className="main-div">
        <LeftDiv>
          <div>
            <h2>A subscription that's more than just classes</h2>
            <LinkTag to={""}>Get subscription</LinkTag>
          </div>
        </LeftDiv>
        <RightDiv>
          <div>
            <video loop muted autoPlay playsinline>
              <source
                data-src="https://static.uacdn.net/web-cms/testseries_17b34f8aec.webm"
                type="video/webm"
                src="https://static.uacdn.net/web-cms/testseries_17b34f8aec.webm"
              />
              <source
                data-src="https://static.uacdn.net/web-cms/testseries_f20683d1ca.mp4"
                type="video/mp4"
                src="https://static.uacdn.net/web-cms/testseries_f20683d1ca.mp4"
              />
            </video>
            <H4>Live tests and quizzes</H4>
            <P_Tag>
              Take live mock tests curated in line with the exam pattern to
              measure your progress, and stay on track
            </P_Tag>
          </div>

          <div className="video_div">
            <video loop muted autoPlay playsinline>
              <source
                data-src="https://static.uacdn.net/web-cms/analytics_96e889f457.mp4"
                type="video/mp4"
                src="https://static.uacdn.net/web-cms/analytics_96e889f457.mp4"
              />
              <source
                data-src="https://static.uacdn.net/web-cms/analytics_8dd3b1a51e.webm"
                type="video/webm"
                src="https://static.uacdn.net/web-cms/analytics_8dd3b1a51e.webm"
              />
            </video>
            <H4>Detailed report and analysis</H4>
            <P_Tag>
              Get in-depth insights with topic wise scores, time spent per
              question and competitive stats
            </P_Tag>
          </div>

          <div className="video_div">
            <video loop muted autoPlay playsinline>
              <source
                data-src="https://static.uacdn.net/web-cms/pdf_650d0a3977.webm"
                type="video/webm"
                src="https://static.uacdn.net/web-cms/pdf_650d0a3977.webm"
              />
              <source
                data-src="https://static.uacdn.net/web-cms/pdf_8d42e74317.mp4"
                type="video/mp4"
                src="https://static.uacdn.net/web-cms/pdf_8d42e74317.mp4"
              />
            </video>
            <H4>PDFs and learning material</H4>
            <P_Tag>
              Get access to class notes with educator annotations for you to
              revisit and revise anytime
            </P_Tag>
          </div>
        </RightDiv>
      </div>
    </Sections>
  );
};
