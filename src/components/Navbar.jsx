import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/mohibLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center px-6">
        <img src={logo} alt="logo"/>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <Link to={"https://www.linkedin.com/in/mohib7870/"}>
          <FaLinkedin />
        </Link>
        <Link to={"https://github.com/mohib990T"}>
        <FaGithub />
        </Link>
        <Link to={"https://www.instagram.com/mohib23mm/"}>
        <FaInstagram />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
