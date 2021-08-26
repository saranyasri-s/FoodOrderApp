import React from "react";
import classes from "./MainHeader.module.css";
function MainHeader(props) {
  return (
    <header className={classes.MainHeader}>
      <p>ReactHotel</p>

      <div className={classes.CartButton}>
        <div>dd</div>
        <p>Your Cart</p>
        <div>dd</div>
      </div>
    </header>
  );
}

export default MainHeader;
