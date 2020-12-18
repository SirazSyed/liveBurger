import Auxy from "../../../hoc/Auxy";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const modal = (props) => {
  return (
    <Auxy>
      <Backdrop show={props.show} clicked={props.hide} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Auxy>
  );
};

export default modal;
