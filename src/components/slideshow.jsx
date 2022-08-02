import "./slide.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import slide from './slide.css'

export default function Slide() {
  const fadeImages = [
    "https://static.uacdn.net/web-cms/daily_live_classes_be8fa5af21.svg?q=75&w=1000&fm=webp",
    "https://static.uacdn.net/web-cms/LMP_1_7e6dc2762e.svg?q=75&w=1000&fm=webp",
    "https://static.uacdn.net/web-cms/chat_with_educator_6cb3c64761.svg?q=75&w=1000&fm=webp",
    
  ];

  return (
    <div className="App">
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} alt="slide" className="imganna img22" />
            </div>
            {/* <h2>First Slide</h2> */}
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} alt="slide"  className="imganna" />
            </div>
            {/* <h2>Second Slide</h2> */}
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} alt="slide" className="imganna img22"  />
            </div>
            {/* <h2>Third Slide</h2> */}
          </div>
        </Fade>
      </div>
    </div>
  );
}
