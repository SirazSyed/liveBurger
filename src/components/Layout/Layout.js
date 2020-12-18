import classes from "./Layout.module.css";
import Auxy from "../../hoc/Auxy";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import { Component } from "react";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  ToggleHandler = () => {
    this.setState((prevstate) => {
      return { showSideDrawer: !prevstate.showSideDrawer };
    });
  };

  render() {
    return (
      <Auxy>
        <Toolbar drawerToggled={this.ToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Auxy>
    );
  }
}

export default Layout;
