import { LOGO_URL } from "../utils/constents";

const Header = () => {
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
          </ul>
        </div>
      </div>
    )
  }
  export default Header;