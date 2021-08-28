import React, { useEffect, useState } from "react";
import classes from "./FoodItem.module.css";
function FoodItem(props) {
  const [itemsNeeded, setItemsNeeded] = useState("");
  useEffect(() => {
    const itemNeeded = props.itemNeeded;
    setItemsNeeded(itemNeeded);
  }, [props.itemNeeded]);
  const inputHandler = (e) => {
    const value = e.target.value;
    setItemsNeeded(value);
    const id = props.id;
    props.onFoodNeeded(id, value);
  };
  const addFoodHandler = () => {
    setItemsNeeded((prevState) => {
      return prevState + 1;
    });
    props.onAddFood(props.id);
  };
  return (
    <div className={classes.FoodItem}>
      <div className={classes.foodItemLeft}>
        <p className={classes.item}>{props.item}</p>
        <p className={classes.itemDescription}>{props.itemDescription}</p>
        <p className={classes.price}>Rs {props.price}</p>
      </div>
      <div className={classes.foodItemRight}>
        <div>
          <label>Amount</label>
          <input
            min="0"
            type="number"
            value={itemsNeeded}
            onChange={inputHandler}
          ></input>
        </div>
        <button onClick={addFoodHandler}>+Add</button>
      </div>
    </div>
  );
}

export default FoodItem;
