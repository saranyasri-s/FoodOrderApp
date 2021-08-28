import React, { useState } from "react";

import MainHeader from "./components/MainHeader/MainHeader";
import classes from "./App.module.css";
import FoodItems from "./components/FoodItems/FoodItems";
import Cart from "./components/MainHeader/Cart/Cart";
function App() {
  const [foodList, setFoodList] = useState([
    {
      item: "Idly",
      itemDescription: "steamed rice cakes",
      price: "77",
      itemNeeded: 0,
      id: "Idly",
    },
    {
      item: "Vada",
      itemDescription: "crispy savoury doughnuts",
      price: "35",
      itemNeeded: 0,
      id: "Vada",
    },
    {
      item: "Uttapam",
      itemDescription: "pizza-pancake hybrids",
      price: "90",
      itemNeeded: 0,
      id: "Uttapam",
    },
    {
      item: "Masala dosa",
      itemDescription: "with spicy mash of potato and onion",
      price: "107",
      itemNeeded: 0,
      id: "Masala dosa",
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const totalItemsNumberArr = foodList.map((food) => {
    return food.itemNeeded;
  });
  let totalItems = 0;
  for (let i = 0; i < totalItemsNumberArr.length; i++) {
    totalItems = totalItems + totalItemsNumberArr[i];
  }
  const addItemHandler = (id) => {
    const UpdatedFoodList = [...foodList];
    const updatedFood = UpdatedFoodList.filter((food) => {
      return food.id === id;
    });
    const index = UpdatedFoodList.indexOf(updatedFood[0]);

    if (index >= 0) {
      UpdatedFoodList[index].itemNeeded += 1;
      setFoodList(UpdatedFoodList);
    }
  };

  const removeItemHandler = (id) => {
    const UpdatedFoodList = [...foodList];
    const updatedFood = UpdatedFoodList.filter((food) => {
      return food.id === id;
    });
    const index = UpdatedFoodList.indexOf(updatedFood[0]);
    UpdatedFoodList[index].itemNeeded -= 1;
    setFoodList(UpdatedFoodList);
  };
  const AddItemNeededFromInputHandler = (id, itemNeed) => {
    const UpdatedFoodList = [...foodList];
    const updatedFood = UpdatedFoodList.filter((food) => {
      return food.id === id;
    });
    const itemNeedInNumber = +itemNeed;
    const index = UpdatedFoodList.indexOf(updatedFood[0]);
    UpdatedFoodList[index].itemNeeded = itemNeedInNumber;
    setFoodList(UpdatedFoodList);
  };
  const closeModalHandler = () => {
    setModalOpen(false);
  };
  const modalOpenHandler = () => {
    setModalOpen(true);
  };
  return (
    <>
      <MainHeader
        totalItems={totalItems}
        onModalOpen={modalOpenHandler}
      ></MainHeader>
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
      <FoodItems
        onFoodNeeded={AddItemNeededFromInputHandler}
        onAddFood={addItemHandler}
        foodItems={foodList}
      ></FoodItems>
      {modalOpen && (
        <Cart
          onAddItem={addItemHandler}
          onRemoveItem={removeItemHandler}
          foodList={foodList}
          onCloseModal={closeModalHandler}
        ></Cart>
      )}
    </>
  );
}

export default App;
