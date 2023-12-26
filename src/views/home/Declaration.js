import "./declaration.css";

export default function Declaration(props) {
  return (
    <article className="declaration" style={{ background: props.background }}>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <button>{props.btnText}</button>
    </article>
  );
}
