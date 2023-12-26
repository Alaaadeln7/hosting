import { Link } from "react-router-dom";
import Logo from "../Logo";
import "./header.css";
import { FaBars } from "react-icons/fa";
export default function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"/"}>Features</Link>
          </li>
          <li>
            <Link to={"/"}>Pricing</Link>
          </li>
          <li>
            <Link to={"/"}>contact</Link>
          </li>
          <li>
            <button>Sign In</button>
          </li>
        </ul>
      </nav>
      <button
        className="bar"
        onClick={() => {
          document.querySelector("nav").classList.toggle("show");
        }}
      >
        <FaBars />
      </button>
    </header>
  );
}
