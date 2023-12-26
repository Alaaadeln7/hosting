import "./customer.css";
import background from "../../assets/background_comment.svg";
export default function Customer(props) {
  return (
    <div className="customer">
      <img className="background" src={background} alt="" />
      <img src={props.image} alt="" />
      <p>{props.comment}</p>
      <div className="info">
        <h5>{props.name}</h5>
        <span>{props.jobTitle}</span>
      </div>
    </div>
  );
}
