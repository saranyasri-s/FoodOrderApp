import React, { useState } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import classes from "./App.module.css";
function App() {
  const [foodList, setFoodList] = useState([
    {
      item: "Idly",
      itemDescription: "steamed rice cakes",
      price: "77",
      ItemNeeded: 0,
      id: "Idly",
    },
    {
      item: "Vada",
      itemDescription: "crispy savoury doughnuts",
      price: "35",
      ItemNeeded: 0,
      id: "Vada",
    },
    {
      item: "Uttapam",
      itemDescription: "pizza-pancake hybrids",
      price: "90",
      ItemNeeded: 0,
      id: "Uttapam",
    },
    {
      item: "Masala dosa",
      itemDescription: "with spicy mash of potato and onion",
      price: "107",
      ItemNeeded: 0,
      id: "Masala dosa",
    },
  ]);

  const addItemHandler = (id) => {
    const UpdatedFoodList = [...foodList];
    const updatedFood = UpdatedFoodList.filter((food) => {
      return food.id === id;
    });
    const index = UpdatedFoodList.indexOf(updatedFood[0]);
    UpdatedFoodList[index].ItemNeeded += 1;
    setFoodList(UpdatedFoodList);
  };

  const removeItemHandler = (id) => {
    const UpdatedFoodList = [...foodList];
    const updatedFood = UpdatedFoodList.filter((food) => {
      return food.id === id;
    });
    const index = UpdatedFoodList.indexOf(updatedFood[0]);
    UpdatedFoodList[index].ItemNeeded -= 1;
    setFoodList(UpdatedFoodList);
  };
  const setItemNeeded = (id, itemNeed) => {
    const UpdatedFoodList = [...foodList];
    const updatedFood = UpdatedFoodList.filter((food) => {
      return food.id === id;
    });
    const index = UpdatedFoodList.indexOf(updatedFood[0]);
    UpdatedFoodList[index].ItemNeeded = itemNeed;
    setFoodList(UpdatedFoodList);
  };
  return (
    <>
      <MainHeader></MainHeader>
      <section className={classes.ImageSection}>
        <div className={classes.HotelDescription}>
          <h4>Delicious Food, Delivered to you</h4>
          <p>
            Choose your favourite breakfast from our broad section of available
            foods and enjoy a delicious breakfast at your home
          </p>
          <p>
            All our meals are cooked with high quality ingredients, just-in-time
            and of course by experienced chefs
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
