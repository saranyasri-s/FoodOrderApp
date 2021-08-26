import React, { useState } from "react";

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
  return <>hello</>;
}

export default App;
