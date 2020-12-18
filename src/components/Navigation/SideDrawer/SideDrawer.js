import classes from "./SideDrawer.module.css";
import NavItems from "../NavItems/NavItems";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxy from "../../../hoc/Auxy";

const sidedrawer = (props) => {
  let addClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    addClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Auxy>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={addClasses.join(" ")}>
        <div className={classes.SideDrawer}>
          <Logo height="11%" />
          <nav>
            <NavItems />
          </nav>
        </div>
      </div>
    </Auxy>
  );
};

export default sidedrawer;
