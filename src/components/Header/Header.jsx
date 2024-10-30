import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-orange-300 p-5 rounded-md">
        <Link className="mr-5" to={"/"}>Home</Link>
        <Link className="mr-5" to={"/users"}>Users</Link>
        <Link className="mr-5" to={"/about"}>About Us</Link>
        <Link className="mr-5" to={"/contact"}>Contact Us</Link>
      </nav>
    </div>
  );
};

export default Header;
