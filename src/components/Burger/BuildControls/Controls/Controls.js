import classes from "./Controls.module.css";

const Controls = (props) => (
  <div className={classes.Controls}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.More} onClick={props.add}>
      more
    </button>
    <button
      className={classes.Less}
      disabled={props.disable}
      onClick={props.delete}
    >
      less
    </button>
  </div>
);

export default Controls;
