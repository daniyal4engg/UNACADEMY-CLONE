import { CourseTop } from "../Other/CourseTop";
import "../Style/CoursePage.css";
import "../Style/Button.css";
import { IntroductionSection } from "../Other/IntroductionSection";
import { PlusSubscription } from "../Other/PlusSubscription";
import { LiteSubscription } from "../Other/LiteSubscription";
import { LiveClasses } from "../Other/LiveClasses";
import { Achievers } from "../Other/Achievers";
import { BatcheSyllabus } from "../Other/BatcheSyllabus";
import { CoursesSoon } from "../Other/CoursesSoon";
import { RecentlyCourse } from "../Other/RecentlyCourse";
import { BestOfAllTime } from "../Other/BestOfAllTime";
import { BestWayToPrepare } from "../Other/BestWayToPrepare";
import Navbar from "../Navbar";
import Footer from "../Footer";
export const CoursePage = () => {
  return (
    <div style={{ backgroundColor: "#fcfcfc" }}>
      <Navbar />
      <CourseTop />
      <IntroductionSection />
      <PlusSubscription />
      <LiteSubscription />
      <LiveClasses />
      <Achievers />
      <BatcheSyllabus />
      <CoursesSoon />
      <RecentlyCourse />
      <BestOfAllTime />
      <BestWayToPrepare />
      <Footer/>
    </div>
  );
};
