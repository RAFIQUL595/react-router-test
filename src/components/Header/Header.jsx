import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="sidebar">
      <nav className="bg-orange-300 p-5 rounded-md text-pink-600">
        <NavLink className="mr-5" to={"/"}>
          Home
        </NavLink>
        <NavLink className="mr-5" to={"/users"}>
          Users
        </NavLink>
        <NavLink className="mr-5" to={"/about"}>
          About Us
        </NavLink>
        <NavLink className="mr-5" to={"/contact"}>
          Contact Us
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
