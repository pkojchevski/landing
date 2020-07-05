import React from "react";
import classes from "./CulturalImage.module.css";

function CulturalImage({ img }) {
  return (
    <div className={classes.ImageWrapper}>
      <img src={img}></img>
      <div className={classes.Title}>#Travel</div>
      <div className={classes.Background}></div>
      <p className={classes.Text}>
        Connecting hoteliers to the future of hospitality: The mission of I Meet
        Hotel
      </p>
      <div className={classes.CardFooter}>
        <p className={classes.Team}>Team OPR Member</p>
        <p className={classes.Date}>Jan 21, 2020</p>
      </div>
    </div>
  );
}

export default CulturalImage;
