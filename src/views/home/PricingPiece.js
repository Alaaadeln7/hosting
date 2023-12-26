import "./pricing.css";
export default function PricingPiece(props) {
  return (
    <article className="pricing-plan" key={props.id}>
      <span style={{ color: props.color }}>{props.headLine}</span>
      <p>
        <sup>$</sup> <span>{props.price}</span>/month
      </p>
      <ul>
        {props.features?.map((item) => (
          <ListItem
            key={item.id}
            disable={item.disable}
            content={item.content}
          />
        ))}
      </ul>
      <button style={{ background: props.color }}>get started</button>
    </article>
  );
}

export const ListItem = ({ disable, key, content }) => {
  return (
    <li key={key} style={disable ? { color: "#ddd" } : null}>
      {content}
    </li>
  );
};
