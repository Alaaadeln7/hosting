import "./feature.css";
export default function Feature(props) {
  return (
    <div className="feature">
      <img src={props.image} alt="" />
      <p>{props.paragraph}</p>
    </div>
  );
}
