import React from "react";
import classes from "./MainHeader.module.css";
function MainHeader(props) {
  return (
    <header className={classes.MainHeader}>
      <p>ReactHotel</p>

      <div onClick={props.onModalOpen} className={classes.CartButton}>
        <p>Your Cart</p>
        <div className={classes.totalItems}>{props.totalItems}</div>
      </div>
    </header>
  );
}

export default MainHeader;
