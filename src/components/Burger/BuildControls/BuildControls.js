import classes from "./BuildControls.module.css";
import Controls from "./Controls/Controls";

const category = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BurgerControls = (props) => (
  <div className={classes.BurgerControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {category.map((ob) => (
      <Controls
        add={() => props.add(ob.type)}
        delete={() => props.delete(ob.type)}
        disable={props.check[ob.type]}
        key={ob.label}
        label={ob.label}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={props.price <= 0.5}
      onClick={props.purchasing}
    >
      Place Order
    </button>
  </div>
);

export default BurgerControls;
