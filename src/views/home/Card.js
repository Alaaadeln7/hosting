import { FaArrowRight } from "react-icons/fa";
import "./card.css";
export default function Card(props) {
  return (
    <article className="card">
      <img src={props.image} alt="" />
      <div className="text">
        <span className="line"></span>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button>
          click here
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
    </article>
  );
}
