import Button from "../../UI/Button/Button";
import Auxy from "../../../hoc/Auxy";

const orderSummary = (props) => {
  const summary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey} : </span>
        {props.ingredients[igkey]}
      </li>
    );
  });

  return (
    <Auxy>
      <h1>Now that is a Delicious Burger!!!</h1>
      <p>The ingredients you chose are: </p>
      <ul>{summary}</ul>
      <p>
        <strong>Total Price: &#8377; {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button clicked={props.cancel} btntype="Danger">
        Cancel
      </Button>
      <Button clicked={props.continue} btntype="Success">
        Continue
      </Button>
    </Auxy>
  );
};

export default orderSummary;
