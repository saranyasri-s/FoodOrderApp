import React from "react";
import FoodItem from "./FoodItem/FoodItem";
import classes from "./FoodItems.module.css";
function FoodItems(props) {
  return (
    <ul className={classes.FoodItems}>
      {props.foodItems.map((foodItem) => (
        <li key={foodItem.id}>
          <FoodItem
            id={foodItem.id}
            item={foodItem.item}
            itemDescription={foodItem.itemDescription}
            price={foodItem.price}
            itemNeeded={foodItem.itemNeeded}
            onAddFood={props.onAddFood}
            onFoodNeeded={props.onFoodNeeded}
          ></FoodItem>
        </li>
      ))}
    </ul>
  );
}

export default FoodItems;
