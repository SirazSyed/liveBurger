import burgerimg from "../../assets/Images/burger-logo.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerimg} alt="Burger-Logo" />
  </div>
);

export default logo;
