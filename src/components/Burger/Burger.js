import classes from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const burger = (props) => {
  let insides = Object.keys(props.inside)
    .map((key) => {
      return [...Array(props.inside[key])].map((_, index) => {
        return <BurgerIngredients key={key + index} type={key} />;
      });
    })
    .reduce((arr, ele) => {
      return arr.concat(ele);
    }, []);
  if (insides.length === 0) {
    insides = <p>Please Add some Ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {insides}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
