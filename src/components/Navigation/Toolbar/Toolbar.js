import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggled} />
    <Logo className={classes.Logo} />
    <nav className={classes.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default toolbar;
