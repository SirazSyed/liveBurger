import Auxy from "../../../../hoc/Auxy";
import classes from "./DrawerToggle.module.css";

const drawerToggle = (props) => (
  <Auxy>
    <div onClick={props.clicked} className={classes.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className={classes.Menu}>Menu</div>
  </Auxy>
);

export default drawerToggle;
