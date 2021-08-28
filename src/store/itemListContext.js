import React from "react";

const itemListContext = React.createContext({
  foodList: [
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
  ],
});
export default itemListContext;
