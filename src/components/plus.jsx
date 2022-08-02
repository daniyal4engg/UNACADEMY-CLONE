
import Navbar from "./Navbar"
import Footer from "./Footer"
import Button from "@mui/material/Button";
import React from "react";
import plus from "./plus.css"
import Slide from "./slideshow";
import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";


const Plus=()=>{
    var c=185
    var c2=278
    var c3=370
    const navigate=useNavigate();
    const [select,setSelect]=useState();
    const handleNavigate = (course) =>{
        var data = [{
            duration:"18 Months",
            price:"3332"
        }]
        if(course=="3332"){
            data = [{
                duration:"18 Months",
                price:course
            }]
        }
        else if(course == "1666"){
            data = [{
                duration:"6 Months",
                price:course
            }]
        }
        else if(course == "554"){
            data = [{
                duration:"3 Months",
                price:course
            }]
        }
        localStorage.setItem("Unacademy", JSON.stringify(data))
        navigate(`/subscription-plus-payment`);
    }
 return(
     <>
     <Navbar/>
 <div className="container">
      <div className="t">
          <h1>IIt JEE subscription</h1>
          <img id="plus" src="https://cdn-images-1.medium.com/max/1000/1*D-iEUQeHUcl0K40bQYLLFQ.png" alt="" />
          

      </div>
      <div className="botm">
          <div className="l">
          <Slide/>
           <h3>Access to curated test series</h3>
          <p>Curated test series that lets you evaluate your</p>
          <p>preparation before your examination</p>
          </div>
          <div className="rit">
              <div className="one">
                  <div> <img src="https://static.uacdn.net/production/_next/static/images/sale_discount.png?q=75&w=32" alt="" /></div>
                 <span>No cost EMI available on 6 months & above subscription plans</span>
              </div>
              <div className="two">
                  <input onChange={(e)=>{
                      setSelect(e.target.value)
                  }} type="radio" id="checkbox" name="months" value={"3332"} />
                  <div className="twoone">
                  <div id="month"><h2> 18 months</h2>
                  <h3 id="org">SAVE 50%</h3>
                  </div>
                  

                <div id="price"><h1>₹{c}/mo</h1>
                <h3>Total

                ₹{c*18}</h3>
                </div>



                  </div>
              </div>
              <div className="two">
                <input onChange={(e)=>{
                      setSelect(e.target.value)
                  }} type="radio" id="checkbox" name="months"  value={"1666"} />
              <div className="twoone">
                  <div id="month"><h2> 6 months</h2>
                  <h3 id="org">SAVE 25%</h3>
                  </div>
                  

                <div id="price"><h1>₹{c2}/mo</h1>
                <h3>Total

                ₹{c2*6}</h3>
                </div>



                  </div></div>
              <div className="two">
                  <input onChange={(e)=>{
                      setSelect(e.target.value)
                  }} type="radio" id="checkbox" name="months" value={"554"}  />
              <div className="twoone">
                  <div id="month"><h2> 3 months</h2>
                  
                  </div>
                  

                <div id="price"><h1>₹{c3}/mo</h1>
                <h3>Total

                ₹{c3*18}</h3>
                </div>



                  </div></div><br /> 
           
               <p>To be paid as a one-time payment</p>

               <div className="three">
                   <div>
                   <img src="https://static.uacdn.net/production/_next/static/images/gift.svg?q=75&w=32" alt="" id="gif"/>
                   </div>
                   <span><input type="text" placeholder="Have a Referal code ?" id="input" /></span>
                   <span>  <Button onClick={()=>{
                          handleNavigate(select)

                   }} id="b" variant="contained" color="success">select LITE</Button></span>

                  
               </div>

          </div>
      </div>
 </div>
 <div style={{marginTop:"5%"}} > <Footer/></div>
 </>
 )
}

export default Plus;