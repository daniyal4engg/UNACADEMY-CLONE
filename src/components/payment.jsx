import React from "react";
import plus from "./payment.css";
import Button from "@mui/material/Button";

import Navbar from "./Navbar";
import Footer from "./Footer";


export const Payment=()=>{
    const arr = JSON.parse(localStorage.getItem("Unacademy"));
    return (
    <>
    <Navbar/>
    <div className="container3">
       <div className="lt">
           <div className="first">
               <div className="jkhsd"></div>
               <div><img id="jhaj" src="https://static.uacdn.net/thumbnail/user/default.png?fm=webp" alt="" /></div>
           </div>
           <div className="second">
               <h1>Choose a payment method</h1>
               <div className="secondmain">
               <div className="secondleft">
                <div className="card" ><img src="https://static.uacdn.net/production/_next/static/images/payments/card.png?q=75&w=32"  alt="" /><h3>Card</h3></div>
                <div className="card"><img src="https://static.uacdn.net/production/_next/static/images/payments/net_banking.png?q=75&w=32"  alt="" /><h3>Net Banking</h3></div>
                <div className="card"><img src="https://static.uacdn.net/production/_next/static/images/payments/upi.png?q=75&w=32"  alt="" /><h3>UPI</h3></div>
                <div className="card"><img src="https://static.uacdn.net/production/_next/static/images/payments/emi-options.png?q=75&w=32"  alt="" /><h3>EMI</h3></div>
               </div>
               <div className="secondright">
                   <input type="number" placeholder="CARD   NUMBER" id="ip1"/>
                   <div className="iptwo">
                   <input type="text" placeholder="Valid Through" id="ip2" />
                   <input type="number"  placeholder="CVV" id="ip3"/>
                   </div>
                   <input type="number" placeholder="CARD   NUMBER" id="ip4"/>

                   <Button id="a" variant="contained" color="success">Pay</Button>

               </div>
               </div>
              
           </div>
       </div>
       <div className="rt">
           <div className="rtfirst">
              <div> <h2>IIT JEE - LITE subscription</h2>
               <p>{arr[0].duration}</p></div>
               <div>
                   <p>Valid till 30 Jun, 2022</p>
                   <p>Change duration</p>
                   </div>
           </div>
           <div className="rt2">
               <div>
               <img src="https://static.uacdn.net/production/_next/static/images/gift.svg?q=75&w=32" id="rt2img" alt="" /> 
               <input type="text" placeholder="HAVE A REFERAL CODE" id="in1"/ >
               </div>
                <div>
                    <img src="https://static.uacdn.net/production/_next/static/images/credit.png?q=75&w=32" id="rt2img" alt="" />
                    <p>111 credits</p>
                    <p>Redeem</p>
                </div>
               
               </div>
           <div className="rt3"> 
            <div>
            <p>Subscription fee</p>
            <p>{`₹${arr[0].price}`}</p>
            </div>
            <hr />
            <div className="rt31">
                <p>Total (Incl. of all taxes)</p>
                <p>{`₹${arr[0].price}`}</p>
            </div>
           </div>
       </div>
    </div>
    <div style={{marginTop:"5%"}} > <Footer/></div>
    </>)
}
