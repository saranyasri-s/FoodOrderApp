import React, { useContext } from "react";
import ModalOpenContext from "../../store/modalOpenContext";
import classes from "./MainHeader.module.css";
function MainHeader(props) {
  const ctx = useContext(ModalOpenContext);
  return (
    <header className={classes.MainHeader}>
      <p>ReactHotel</p>

      <div onClick={ctx.onModalOpen} className={classes.CartButton}>
        <p>Your Cart</p>
        <div className={classes.totalItems}>{props.totalItems}</div>
      </div>
    </header>
  );
}

export default MainHeader;
