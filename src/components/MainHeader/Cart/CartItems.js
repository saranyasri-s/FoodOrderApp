import React from "react";
import classes from "./CartItems.module.css";
function CartItems(props) {
  const removeItemHandler = () => {
    props.onRemoveItem(props.id);
  };
  const addItemHandler = () => {
    props.onAddItem(props.id);
  };
  return (
    <>
      <div className={classes.CartItems}>
        <div className={classes.CartItemsLeft}>
          <p className={classes.item}>{props.food}</p>
          <p className={classes.price}>Rs {props.price}</p>
          <p className={classes.itemNeeded}>* {props.itemNeeded}</p>
        </div>
        <div className={classes.CartItemsRight}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </>
  );
}

export default CartItems;
