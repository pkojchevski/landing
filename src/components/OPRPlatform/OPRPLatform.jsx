import React from "react";
import classes from "./OPRPlatfrom.module.css";
import OPRImages from "./OPRImages/OPRImages.jsx";

function OPRPLatform() {
  return (
    <div className={classes.OPRPlatform}>
      <div
        className={classes.OPRPlatformImage}
        style={{ backgroundImage: "url('./images/OPR section bg.png')" }}
      ></div>
      <div className={classes.ContentWrapper}>
        <div className={classes.LogoWrapper}>
          <img
            className={classes.LogoBg}
            src={require("../../assets/images/logo_with_bg.png")}
            alt="LogoBg"
          ></img>
        </div>
        <div className={classes.Text}>
          <h2 className={classes.TextHeader}>JOIN THE MOVEMENT</h2>
          <p class={classes.TextParagraph}>
            Do you like what we are doing. Sign up and start rating, earn up to
            500 points on your first Sign Up.
          </p>
          <button className={classes.Button}>SIGN UP</button>
        </div>
        <OPRImages />
      </div>
    </div>
  );
}

export default OPRPLatform;
