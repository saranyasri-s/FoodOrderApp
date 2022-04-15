import React from "react";
import classes from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={classes.navbar}>
      <h3>ReactHotel</h3>
      <div className={classes.buttons}>
        <button className={classes.login}>Login</button>
        <button className={classes.signup}>Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
