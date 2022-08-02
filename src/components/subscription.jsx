
import Button from "@mui/material/Button";
import React from "react";
import subscription from "./subscription.css"
import { Link } from "react-router-dom";

import Navbar from "./Navbar"
import Footer from "./Footer"

const GetSubscription = () => {
  return( 
    <>
    <Navbar/>
  <div className="con">
    <p className="main-heading">IIT JEE</p> 
      <p className="normal-text">Select a subscription plan that suits you</p>
     <div className="main">

     <div className="left">
       <div className="plus">
       <div>
       <h1>PLUS</h1>
      <p className="p">Basic plan to get you started</p></div>
     
     <div className="r"><img src="https://unacademy-prod.s3.ap-southeast-1.amazonaws.com/web-cms/Plus_icon_9029cac986.png" alt="" className="i" width="100%" height="100%" /></div>
    
     </div>
     <div className="btm">
       <div><img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=32" alt="" /><span>India's best educators</span></div>
       <div><img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=32" alt="" /><span>Interactive live classes</span></div>
       <div><img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=32" alt="" /><span>Structured courses & PDFs</span></div>
       <div><img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=32" alt="" /><span>Live tests & quizzes</span></div>
     
    

    

     
     <Button id="bt" variant="contained" color="success">select PLUS</Button>

     </div></div>

      <div className="right">
        <div className="top">
          <div><h1>ICONIC</h1>
          <p className="p">Take your IIT JEE preparation to next level <br/> with Personal Coach</p>
          </div>
          <div><img src="https://unacademy-prod.s3.ap-southeast-1.amazonaws.com/web-cms/Group_4894_2b74e644b9.png" id="im" alt="" width="100%" height="100%" /></div>
        </div>
        <div className="down">
          
        <div>
        <div><img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=32" alt="" /><span>India's best educators</span></div>
       <div><img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=32" alt="" /><span>Interactive live classes</span></div>
       <div><img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=32" alt="" /><span>Structured courses & PDFs</span></div>
       <div><img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=32" alt="" /><span>Live tests & quizzes</span></div>
       
        </div>
        <div>
        <div><img src="data:image/png;base64,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" alt="" /><span>1:1 Live mentorship</span></div>
       <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX7jAD////7gwD7igD7iAD7hgD7ggD7jQD///3+5M3/8+f//Pj/9ev+6NT/+fL+7t/9y5/7lCD8okn+38T+2br8t3f8rmb8s3D90av9vYX91rT7kBD9x5j9xZP+3cH+59L8u3/9zqX7mjP8ql38p1P8oEX8nT37kx/8sGv8s3X9wo37lSv7nDf91LT8pVD7mSgQEH0QAAAMWklEQVR4nO2d53LqyhKF0QQJDAZjnHECnO1r3v/trmS28oTuifIpr3+nTtVGn2fUE1Z3a5T81zWK/QDe9Uf4+/VH+Pv1R+hA06PJ2cnj++5lnzHOOaNZtn/evV9v7h/mU/8/75VwPtk8nr4yQnIuxiilo0K0UP7fnBMy2j59XB175fRFOD7eXGQpyUfsgCVRgcpJur7cHHt6ED+Ei5NvWsCp2NqgOWZ2cXXk42GcE07P3jPC1SMno0yX16ux6wdySzg+2zHM2PUpCb24d/pITgknlzmeMV0D8nzi8KmcEc7uMmIxeh3I7G7m6sEcES4u83fPCd4/SE52jgbSCeHqmVjPzp4Y+bxx8XAOCG+WxOXw1aJkfTUAwqvM6fTsMHJqzWhJePbqke/AuLacq1aED1tP87PFSLZWMceCcH4RgO/AuLNYO8wJT+xXd7AYvw1OePzp+QXsiH+aHj4MCR8DTdBalDwGJDx+5YH5CvFXo2E0IbwLPoAHUWLyNuIJ588xBvAg/jz3Tzih4UJoX4ytfBPepXFmaCmafnglHO9IVL5CZIe76EARzpbxXsFafIna4WAIJ47O8Lai7MEP4U2kRaIvShC3VXDC2zQ2WC2awo+NYMLr+DGmKXLimvB8WICjUXrtlvB8CEG0LehOHEY4uBEsRM7dEQ5wBAvBRhFC+DHEESxE7twQngwVMEcELBp6wrMBrYM9pfqjhpZwMtwRHBXXqQtbwqOB7EVloiPdmVhDOF0PGzA/E3/aEX7HPNDDxC9sCB+HuRC2pbmfUhIOIozqb55Tpa+hIjwKe60tFjn51L0plKqijYrwcxCAyVwb7dipGeH1AF7Cn33ZPNMhqk6LcsIhLPXkcHU40yPKF34p4Vj7r/oXKU+52n0H3eIJL+PPUVIf4490aWRcesyQEQ5gjraOfwvdKHJZ2p+M8DX6HOXtI/xCs3TRFxzhR/Q5yi87j3SsQZSdFcWER9HnqGC3eay+kaZMnGosJnyKveHmO8FTTdSjyMU3U0LCVewh5N/Ch12prT3xoigkXEYOMxLAJLlX/unFmzcR4VXkIeTPEkDdaUd4yBARRt7NMDlgjqj661PReV9AuIm7UrAXpcd7pRpFcgYijHv3xLYaE1uFSJcQwrhDyD61BTQbxUQVWKd9wqhvIXsFVAidyEeRfukJr2IOIV2DMoLu5KNIeuG0RxjzgpRmwJQnuVdEe4G4SxhzO0MzcBrJo/QxSTe9r0t4EW9HShmiskuKyN7UhLN4Q0gpqnRN6tryzkzvEN5GizOUaV2ktmTXLLxz79YhjBZnADZZV3vxs9JXFWG02xnK0fm/Uk+ls2C0CS8jxRnai4BayTOYWPsk3CIcR9qSUo6uGVFkT1AqJzyLE2cowI3vSLGr6W5OW4SRFkNMpuFB6ixC1rrFahJO40zSVHCoU0t1uhgV07R5AGsS3keZpKJTq1rKQ/DPP9mc9U3C8xiTFJEp+k832iWNNf2AJuEowiQ1ANRb7zQTEy4iLPdkgwVUXkWVShsbpAbhSfjXMAVn+pZS35iW4o2Z0SAMf5UPyi1saQXLpmcNU6AmHAd/DQm2/CXfN8OekWb1elETHod+DQk0U7vSA7geomFh1IShbxHxFZM6B7GhxotYE76FfQ0lXphCC0RFC6v91Zow7D1pz+LVA2L2lHTdJ5wHzWHj3fsirZCJrmkVairCh5CBRpcxKQBEdi2qj9QVYchAI/SwlZphl7I61FSEj+ECDX9CA6KDBKvW2orwNFigkXrYUumzE3ti1V+xIgyWIsRkqT0KQPz8qu3gknAa6jVkX9h+ZdOlyQtUZdeUhIZHJ4pNI9ZavD2NjQBHpHR5SsKV0RiylwUuigMs3i7gl1kIrO6FS8L/mRAWMw61ErM9ugnki2GM5+X1T0loYsmwfTHjELspkIfd1rPpIsY3HUKD5bCccbq8yEpAD7upU+MAyMsFsSR8RxPWMw54qgF72LW+zSN85V6UhE/oTUNjxoFOpggPu9TOYgmrLr5Lwi026rdeKcDtAqVBAUe0TOMrCZH7ItZ5pbQJDmiLN0kurDYhVfZ+SYjb2vZjxr36eBkcsD4Dl4SoQCOKGcq7dgMP27Z+vLr3Lgkx/544Zihu2008bNsDOS3JDAjpSBwzpIm3lGC6rfzIvgsHZcaEdCTLe9mIR5H2c810ctEBgHcIwe+hKrFHXLmvLoAUSelhQ9UdQ+gRQZ2aJXKfXXvYQFX5CsjVQhf1+3/9FA3opodDL5bCVnx91O+GiBTdX1XyNqMJu+uhJIUKC9hFxFu8jgBHdN8hfIbsnUGZS82lGm/xAjxsIGGZSlsS7vTBFLpu10mD8GZOpUAeNkiVSQo/H8LX7bd/iPhWlQ4zlNl7h/BaW/SOWLcPm2a8hw21eEGEpf9aEurSFHAbk+Jk58/DBqlKpC0JNUl7lOCS65443sNGWLwQwu5dm+a+FN029NSnhw1R775UXRdL0deA6E+NgG/soITdO++pOtLQtefvFrkGpLTrW+jafBjcVmPkvFlT33tKvjU/gXccMIAGX97RPG7fP9QuiHjXCCy8xasn7HvA+po1ZfWqjQwsXq0EPj4g6UtRgWwH6CGFoE77qgingE09PsUAoOmrjxwJQT4N6AzsAXGqbQNlokZBcE0IqpfBZ8JoNN57yXJp1M3UhLDyWHw2kxpw6yeNh9eXJ+j8UnxGmkqGJr1WwvxSaGMofFahXMYetkbiHGHIRcYBEZ0ZKpO5h62ROM8bnqtv+j2Urp68ZSlVaQptQnjSEP50K5KVxauWpN4C4ZKm6CuYviwdUJVkNTOYuiejL7609OYxkU5a94S5y0s3doBeG95Ja9fGmFOaHaLXJu/y+kNcDSmkl7ZM1h62UvIaUmSJJd5WKuX5SxK8VbNpU8tNDBE9d7GnrHUZYVWPj6/gLeTEw1aocixEhNieCngHO0CbfmVPBWzyl0GahSsHVP5Myr4Y6ERaNKK2Dttamt4m6P40yHQnfR22tTT9afBtFVCIAVqgs+7xtUuI79+CyMqDlSnbSdsnCp1Ki8isXAUoAOw32+0RGuQKADs8Aeuw7dRfv/o99wwKoEAZzk49bOmT9Bsn9glNmu4BstQfgnyGgPePA4LelyZOl7aUwrGHLXuMrP/LrvqXslclomuLVyIuOAuIetAamV1KBxVVh20uUftSIaHZxkOBGOqDQ8KDgLAXNChRsSdp7SS6TNlQ4g8kCAkNG9NJEGfOTXqJxIl34p7s0Av+joQ+uA8PW/zrYltMTGjaAlPgg3vxsMU/Lo7mkm8j3BleZ/Yq0edePGzhT0uSWWXftzBtPN/xwf142CIJu5WrCI3bZLR88Kkni1cgaYa29Dszxh8ka5rEpmXKBr8qtcPkX0MyDoE1YjhA4W5GR2jeN6o0ib1ZvH0pqgjkhBbfmjl8xzYgIFeYfQrCxDxMFCaxPw+7J2UzERXhzHzDTO48WrxdmX87T1fcqxIL2DnM/PuHw/h8nlaaug41YXIa+7NIeulS7TSEw/+WrGIlBBEO/3vA2otMHeEQPqKnkr5gUEvoriLQhwAutJ4wuR3uKEIqOAGEnnNDLASq/4MQes3QshAsRxJEOExEAstzhREOEREICCX0m4hmInAaL5TQdyITVvAaXDCh6ltg4YXIjIQTJjchTFyQKOZ7CgjCZDKQPSqjmBweDGFyFOyGXiW+RXW2QxEmU4smeK5EkHVJOML81K/+YK130RSbQ48lTFYhb2B6YiN0Uy00YTLbxpup5BndXNKAsEjTjvThK6MqDxPCZLKOMYx8ie5rZ0xYbFNDDyPF90qxIgw+jHyL7rxoSVgY4eGCKpNZ2F4Jk9ku0FSl5AIfQl0Q5lN1GYCRki+jCOOEMD9vZJ5T8ihZGtR0OCRMxifoxvMovrVxcZUrwlxXa0+MlGyNyo6cE+ZzdUncx1VGXtCfthTJCWGSPLwRpwNJOb+0ii+1HBEmyfx2TRzdAVBG9huL9aEtZ4S5Ju/MHpIyTs/RRySFXBLmkfX+jdpA5qNHLyxXh67cEuYar95HhBtQ5oOXLq9XzvttOScstNjsMhRlTkey3RXq4+pQeSHMNV7cnO/THFPDSVkOl+7Pbxa+Oon5IjxocfPxtOSE8IL0RwXUj3Ky4n98Pn3cmJ6LYPJL+KPp0eR+c/3+/bJfZ/l0ZDRb71++368395OZ516FhQIQRtYf4e/XH+Hv1x/h79f/AY5wtwZXwfIdAAAAAElFTkSuQmCC" alt="" /><span>Live doubt solving</span></div>
       <div><img src="data:image/png;base64,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" alt="" /><span>Physical notes</span></div>
       
        </div>
        
       
        </div>
        <div className="two-btns">
        <Button variant="contained" color="success" > select ICoNIC</Button>
        <Button variant="outlined">Learn more</Button>
        </div>
        
         
      </div>
      
     </div>
     <div className="lite">
        <div>
            <div>
            <h1>LITE</h1>
            <p>Assess your preparation with tests</p>
            </div>
            <div className="last-image">
              <img src="https://unacademy-prod.s3.ap-southeast-1.amazonaws.com/web-cms/Lite3_96f4e7c481.png" width="100%" height="100%"></img>
            </div>
        </div>
        <div>
          <div className="last-div">
          <div><img className="image12" src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=32" alt="" /><span id="image12">Access to curated test series</span></div>
          <div><img className="image12" src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=32" alt="" /><span id="image12">Daily practice questions</span></div>
          </div>
          <div>
           <Link to= {"/subscription-plus"}><Button id="last-btn" variant="contained" color="success">select LITE</Button></Link>
          </div>
        </div>
      </div>
  </div>
 <div style={{marginTop:"12%"}} > <Footer/></div>
  </>);
};

export default GetSubscription;
