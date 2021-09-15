import React, { useState, useEffect } from "react";

import MainHeader from "./components/MainHeader/MainHeader";
import classes from "./App.module.css";
import FoodItems from "./components/FoodItems/FoodItems";
import Cart from "./components/MainHeader/Cart/Cart";
import ModalOpenContext from "./store/modalOpenContext";
import itemListContext from "./store/itemListContext";
function App() {
  const [foodList, setFoodList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchmeals = async () => {
      setIsLoading(true);
      setError(false);

      const response = await fetch(
        "https://myfoodorderapp-91f15-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("true");
      }
      const datas = await response.json();
      let foodLists = [];
      console.log(datas);
      for (let keys in datas) {
        foodLists.push({
          item: datas[keys].item,
          itemDescription: datas[keys].itemDescription,
          id: keys,
          price: datas[keys].price,
          itemNeeded: datas[keys].itemNeeded,
        });
      }
      setFoodList(foodLists);
      setIsLoading(false);
    };

    fetchmeals()
      .then()
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
        setError(true);
      });
  }, []);
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
    <itemListContext.Provider
      value={{
        foodList: foodList,
        onFoodNeeded: AddItemNeededFromInputHandler,
        onAddFood: addItemHandler,
        onAddItem: addItemHandler,
        onRemoveItem: removeItemHandler,
      }}
    >
      <ModalOpenContext.Provider
        value={{
          isModalOpen: modalOpen,
          onModalOpen: modalOpenHandler,
          onCloseModal: closeModalHandler,
        }}
      >
        <MainHeader totalItems={totalItems}></MainHeader>

        <section className={classes.ImageSection}>
          <div className={classes.HotelDescription}>
            <h4>Delicious Food, Delivered to you</h4>
            <p>
              Choose your favourite breakfast from our broad section of
              available foods and enjoy a delicious breakfast at your home
            </p>
            <p>
              All our meals are cooked with high quality ingredients,
              just-in-time and of course by experienced chefs
            </p>
          </div>
        </section>
        {foodList.length && <FoodItems></FoodItems>}
        {isLoading && (
          <div className={classes.loading}>
            <p>Loading available food items...</p>
          </div>
        )}
        {error && (
          <div className={classes.error}>
            <p>Something went wrong...</p>
          </div>
        )}
        {modalOpen && <Cart></Cart>}
      </ModalOpenContext.Provider>
    </itemListContext.Provider>
  );
}

export default App;
