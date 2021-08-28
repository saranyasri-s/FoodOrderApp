import React from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";
function Cart(props) {
  const filteredFoodList = props.foodList.filter((food) => {
    return food.itemNeeded > 0;
  });
  const totalAmountArr = filteredFoodList.map((food) => {
    return food.price * food.itemNeeded;
  });
  let totalAmount = 0;
  for (let i = 0; i < totalAmountArr.length; i++) {
    totalAmount = totalAmount + totalAmountArr[i];
  }

  return (
    <>
      {ReactDOM.createPortal(
        <div onClick={props.onCloseModal} className={classes.Backdrop}></div>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ul className={classes.CartItems}>
          {filteredFoodList.map((food) => {
            return (
              <li key={food.id}>
                <CartItems
                  food={food.item}
                  itemNeeded={food.itemNeeded}
                  price={food.price}
                  onAddItem={props.onAddItem}
                  onRemoveItem={props.onRemoveItem}
                  id={food.id}
                ></CartItems>
              </li>
            );
          })}
          {filteredFoodList.length > 0 && (
            <>
              <div className={classes.totalAmount}>
                <p>Total Amount</p>
                <p> Rs {totalAmount}</p>
              </div>
              <div className={classes.buttons}>
                <button onClick={props.onCloseModal} className={classes.close}>
                  Close
                </button>
                <button
                  onClick={() => {
                    console.log("Ordering...");
                  }}
                  className={classes.order}
                >
                  Order
                </button>
              </div>
            </>
          )}

          {filteredFoodList.length === 0 && (
            <p style={{ textAlign: "center" }}>Add items to show in cart</p>
          )}
        </ul>,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default Cart;
