import { useState } from "react";
import { LOGO_URL } from "../utils/constents";
import { CART_LOGO } from "../utils/constents";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnName, setbtnName] = useState("login");
  //console.log("Header, render")

  const onlineStatus = useOnlineStatus();


  //Subscribing to the store using a Selector
  const cartItems= useSelector((store )=> store.cart.items);


  return (
    <div className="flex justify-between shadow-xl ">
      <div className="logo-container">
        <img
          className="w-28 " src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
        <li className="px-4">onlineStatus:{onlineStatus  ?"✅" : "🔴"}</li>
          <li className="px-4" ><Link to="/">Home</Link></li>

          <li className="px-4"><Link to="/about">About Us</Link></li>

           <li className="px-4"><Link to="/contact">Contact Us</Link></li>

            {/* <li className="px-4 font-bold" to ="/cart">CartItem ({cartItems.length}items)</li> */}

<li className="px-4 font-bold text-xl">
  <Link to="/cart">   <img
          className="w-8" src={CART_LOGO} />({cartItems.length} items)</Link>
</li>
          <button className="login" onClick={() => {
            btnName === "login" 
            ? setbtnName("logout") 
            : setbtnName("login");
          }}
          >{btnName}</button>
        </ul>
      </div>
    </div>
  )
}
export default Header;