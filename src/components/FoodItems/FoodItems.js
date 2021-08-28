import React, { useContext } from "react";
import FoodItem from "./FoodItem/FoodItem";
import classes from "./FoodItems.module.css";
import itemListContext from "../../store/itemListContext";
function FoodItems() {
  const foodListCtx = useContext(itemListContext);
  return (
    <ul className={classes.FoodItems}>
      {foodListCtx.foodList.map((foodItem) => (
        <li key={foodItem.id}>
          <FoodItem
            id={foodItem.id}
            item={foodItem.item}
            itemDescription={foodItem.itemDescription}
            price={foodItem.price}
            itemNeeded={foodItem.itemNeeded}
            onAddFood={foodListCtx.onAddFood}
            onFoodNeeded={foodListCtx.onFoodNeeded}
          ></FoodItem>
        </li>
      ))}
    </ul>
  );
}

export default FoodItems;
