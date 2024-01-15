import { useState } from "react";
import { LOGO_URL } from "../utils/constents";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btnName, setbtnName] = useState("login");
  console.log("Header, render")

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex">
      <div className="logo-container">
        <img
          className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-item">
        <ul>
        <li>onlineStatus:{onlineStatus  ?"✅" : "🔴"}</li>
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/about">About Us</Link></li>
           <li><Link to="/contact">Contact Us</Link></li>
            {/* <li><Link to="/add">Add to cart</Link></li> */}
            <li>Add to cart</li>
 {/*  when we will bw going to use the anchor tag it refresh the wholw page  */}
          {/* <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li> */}
          <button className="login" onClick={() => {
            btnName === "login" 
            ? setbtnName("logout") 
            : setbtnName("login");
            // if my btn is login then setbtnamw is logout otherwise set my btn name is login
          }}
          >{btnName}</button>
        </ul>
      </div>
    </div>
  )
}
export default Header;