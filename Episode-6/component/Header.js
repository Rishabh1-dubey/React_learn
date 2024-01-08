import { useState } from "react";
import { LOGO_URL } from "../utils/constents";

const Header = () => {

  const [btnName ,setbtnName]=useState("login");
  console.log("Header, render")
    return (
      <div className="Header">
        <div className="logo-container">
          <img
            className="logo" src={LOGO_URL} />
        </div>
  
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Add Cart</li>
            <button className="login" onClick={( )=>{
              btnName==="login" ?setbtnName("logout"):setbtnName("login");
              // if my btn is login then setbtnamw is logout otherwise set my btn name is login
            }}
            >{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }
  export default Header;