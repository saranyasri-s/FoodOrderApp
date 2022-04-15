import React, { useEffect, useState } from "react";
import classes from "./Content.module.css";
function Content() {
  const [qn, setQn] = useState("first");

  return (
    <div className={classes.content}>
      <p>Late night at office?</p>
      <p>Game Night?</p>
      <p>Hungry?</p>
      <p>Cooking gone wrong?</p>
      <p className={classes.orderFood}>
        Order food and get delivered in 30 minutes
      </p>
      <div className={classes.hotelAvailability}>
        <p>POPULAR CITIES OUR HOTEL AVAILABLE IN INDIA</p>
        <div className={classes.cities}>
          <p style={{ color: " #000000" }}>Ahemedabad</p>
          <p>Chennai</p>
          <p style={{ color: " #000000" }}>Coimbatore</p>
          <p>Mumbai</p>
          <p style={{ color: " #000000" }}>Delhi</p>
          <p>Hyderabad</p>
          <p style={{ color: " #000000" }}>Kolkotta</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
