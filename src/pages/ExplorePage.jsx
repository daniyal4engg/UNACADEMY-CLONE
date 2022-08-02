/** @format */
import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Top } from "../components/ExplorePage/Top";
import { DataComp } from "../components/ExplorePage/Data";
import { TeacherData } from "../Utils/server";
import Footer from "../components/Footer";
import "./exp.css";
import LoadingBar from "react-top-loading-bar";
import { useNavigate } from "react-router-dom";

export const ExplorePage = () => {
  const [jee, setjee] = React.useState([]);
  const [upse, setupse] = React.useState([]);
  const [gate, setgate] = React.useState([]);
  const [cuset, setcuset] = React.useState([]);
  const [govt, setgovt] = React.useState([]);
  const [statepsc, setstatepsc] = React.useState([]);
  const [defence, setdefence] = React.useState([]);
  const [net, setnet] = React.useState([]);
  const [ca, setca] = React.useState([]);
  const [prog, setprog] = React.useState([]);
  const [soft, setsoft] = React.useState([]);
  const [data, setdata] = React.useState([]);
  const [agri, setagri] = React.useState([]);
  const [campus, setcampus] = React.useState([]);
  const [fswd, setfswd] = React.useState([]);
  const [cbse, setcbse] = React.useState([]);
  const [msb, setmsb] = React.useState([]);
  const [usb, setusb] = React.useState([]);

  const ref = React.useRef(null);
  const history = useNavigate();

  React.useEffect(() => {
    document.title = "Goals | Unacademy";
    ref.current.continuousStart();
    TeacherData("JEE").then((res) => {
      setjee(res.data);
    });
    TeacherData("UPSC").then((res) => {
      setupse(res.data);
    });
    TeacherData("GATE").then((res) => {
      setgate(res.data);
    });
    TeacherData("CUCET").then((res) => {
      setcuset(res.data);
    });
    TeacherData("GOVT").then((res) => {
      setgovt(res.data);
      ref.current.complete();
    });
    TeacherData("STATEPSC").then((res) => {
      setstatepsc(res.data);
      ref.current.complete();
    });

    TeacherData("DEFENCE").then((res) => {
      setdefence(res.data);
      ref.current.complete();
    });
    TeacherData("NET").then((res) => {
      setnet(res.data);
      ref.current.complete();
    });
    TeacherData("CA").then((res) => {
      setca(res.data);
      ref.current.complete();
    });
    TeacherData("PROG").then((res) => {
      setprog(res.data);
      ref.current.complete();
    });
    TeacherData("SOFT").then((res) => {
      setsoft(res.data);
      ref.current.complete();
    });
    TeacherData("DATA").then((res) => {
      setdata(res.data);
      ref.current.complete();
    });
    TeacherData("AGRI").then((res) => {
      setagri(res.data);
      ref.current.complete();
    });
    TeacherData("CAMPUS").then((res) => {
      setcampus(res.data);
      ref.current.complete();
    });
    TeacherData("FSWD").then((res) => {
      setfswd(res.data);
      ref.current.complete();
    });
    TeacherData("CBSE").then((res) => {
      setcbse(res.data);
      ref.current.complete();
    });
    TeacherData("MSB").then((res) => {
      setmsb(res.data);
      ref.current.complete();
    });
    TeacherData("USB").then((res) => {
      setusb(res.data);
      ref.current.complete();
    });
    // history.listen(() => {
    //   window.scrollTo(0, 0);
    // });
  }, []);

  const mockData = [
    { el: "JEE and NEET Preparation", to: "JEE", id: 1 },
    { el: "UPSC CSE", to: "UPSC", id: 2 },
    { el: "GATE, ESE and IIT-JAM", to: "GATE", id: 3 },
    { el: "CUCET", to: "CUCET", id: 4 },
    { el: "Govt Exams", to: "GOVT", id: 5 },
    { el: "State PSC", to: "STATEPSC", id: 6 },
    { el: "Defence Exams", to: "DEFENCE", id: 7 },
    { el: "NET Exams", to: "NET", id: 8 },
    { el: "CA", to: "CA", id: 9 },
    { el: "Programming for Students", to: "PROG", id: 10 },
    { el: "Software Development", to: "SOFT", id: 11 },
    { el: "Data Science", to: "DATA", id: 12 },
    { el: "Agriculture Exams", to: "AGRI", id: 13 },
    { el: "Campus Placement - IT Jobs", to: "CAMPUS", id: 14 },
    { el: "Full Stack Development", to: "FSWD", id: 15 },
    { el: "CBSE", to: "CBSE", id: 16 },
    { el: "Maharashtra State Board", to: "MSB", id: 17 },
    { el: "Uttar Pradesh State Board", to: "USB", id: 18 },
  ];

  return (
    <>
      <LoadingBar color="#08BD80" height="4px" ref={ref} />
      {/* <SchoolSyllabus /> */}
      <Top />
      <MainDiv>
        <SideBar>
          {mockData.map(({ el, to, id }) => {
            return (
              <LI key={id}>
                <Link
                  spy={true}
                  smooth={true}
                  to={to}
                  activeClass="active"
                  hashSpy={true}
                >
                  <H4 id="P">
                    <h4>{el}</h4>
                  </H4>
                </Link>
              </LI>
            );
          })}
        </SideBar>
        <Data>
          {jee.length !== 0 ? (
            <DataComp
              cat="JEE"
              items={jee}
              name="JEE and NEET Preparation"
              page="1e"
            />
          ) : (
            false
          )}
          {upse.length !== 0 ? (
            <DataComp cat="UPSC" items={upse} page="1a" name="UPSC CSE" />
          ) : (
            false
          )}
          {gate.length !== 0 ? (
            <DataComp
              cat="GATE"
              items={gate}
              page="1b"
              name="GATE, ESE and IIT-JAM"
            />
          ) : (
            false
          )}
          {cuset.length !== 0 ? (
            <DataComp cat="CUCET" items={cuset} page="1c" name="CUCET" />
          ) : (
            false
          )}
          {govt.length !== 0 ? (
            <DataComp cat="GOVT" items={govt} name="Govt Exams" page="1d" />
          ) : (
            false
          )}
          {statepsc.length !== 0 ? (
            <DataComp
              cat="STATEPSC"
              items={statepsc}
              name="State PSC"
              page="1e"
            />
          ) : (
            false
          )}
          {defence.length !== 0 ? (
            <DataComp
              cat="DEFENCE"
              items={defence}
              name="Defence Exams"
              page="1f"
            />
          ) : (
            false
          )}
          {net.length !== 0 ? (
            <DataComp cat="NET" items={net} name="NET Exams" page="1g" />
          ) : (
            false
          )}
          {ca.length !== 0 ? (
            <DataComp cat="CA" items={ca} name="CA" page="1h" />
          ) : (
            false
          )}
          {prog.length !== 0 ? (
            <DataComp
              cat="PROG"
              items={prog}
              name="Programming for Students"
              page="1i"
            />
          ) : (
            false
          )}
          {soft.length !== 0 ? (
            <DataComp
              cat="SOFT"
              items={soft}
              name="Software Development"
              page="1j"
            />
          ) : (
            false
          )}
          {data.length !== 0 ? (
            <DataComp cat="DATA" items={data} name="Data Science" page="1k" />
          ) : (
            false
          )}
          {agri.length !== 0 ? (
            <DataComp
              cat="AGRI"
              items={agri}
              name="Agriculture Exams"
              page="1l"
            />
          ) : (
            false
          )}
          {campus.length !== 0 ? (
            <DataComp
              cat="CAMPUS"
              items={campus}
              name="Campus Placement - IT Jobs"
              page="1m"
            />
          ) : (
            false
          )}
          {fswd.length !== 0 ? (
            <DataComp
              cat="FSWD"
              items={fswd}
              name="Full Stack Development"
              page="1n"
            />
          ) : (
            false
          )}
          {cbse.length !== 0 ? (
            <DataComp cat="CBSE" items={cbse} name="CBSE" page="1o" />
          ) : (
            false
          )}
          {msb.length !== 0 ? (
            <DataComp
              cat="MSB"
              items={msb}
              name="Maharashtra State Board"
              page="1p"
            />
          ) : (
            false
          )}
          {usb.length !== 0 ? (
            <DataComp
              cat="USB"
              items={usb}
              name="Uttar Pradesh State Board"
              page="1q"
            />
          ) : (
            false
          )}
        </Data>
      </MainDiv>
      <Footer />
    </>
  );
};

const MainDiv = styled.div`
  /* border: 2px solid red; */
  width: 1136px;
  margin: 83px auto 0px;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  gap: 16px;
`;
const SideBar = styled.div`
  grid-column: span 6 / auto;
  position: sticky;
  top: 100px;
  height: calc(100vh - 100px);
  padding-inline-start: 0px;
  overflow-y: auto;
  -webkit-font-smoothing: antialiased;
  font-family: AvertaStd, -apple-system, BlinkMacSystemFont, sans-serif !important;
  overscroll-behavior: none;
`;
const Data = styled.div`
  grid-column: span 18 / auto;
  /* border: 2px solid green; */
  padding-bottom: 425px;
`;

const LI = styled.div`
  padding-bottom: 12px;
  list-style-type: none;
  cursor: pointer;
`;

const H4 = styled.div`
  & h4 {
    line-height: 24px;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    font-family: AvertaStd, -apple-system, BlinkMacSystemFont, sans-serif !important;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #7a8b94;
    padding-bottom: 12px;
    list-style-type: none;
    cursor: pointer;
    display: list-item;
  }
  /* & h4:active {
  } */
  & .active {
    color: black !important;
    font-weight: normal;
  }
`;
