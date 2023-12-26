import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <div className="logo">
      <h1>
        <Link to={"/"} style={{ color: "#186cff" }}>
          Hosting
        </Link>
      </h1>
    </div>
  );
}
