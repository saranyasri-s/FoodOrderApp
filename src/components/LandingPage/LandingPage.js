import React from "react";
import classes from "./LandingPage.module.css";
import Navbar from "./Navbar";
import Content from "./Content";
function LandingPage() {
  return (
    <div>
      <div className={classes.img}>
        <div className={classes.left}>
          <Navbar></Navbar>
          <Content></Content>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
