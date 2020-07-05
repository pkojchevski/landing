import React from "react";
import classes from "./FeaturedTopicImage.module.css";

function FeaturedTopicImage({ featured }) {
  return (
    <div className={classes.ImageWrapper}>
      {/* <div src={featured.imgUrl} alt="Environmental" /> */}
      <div
        className={classes.Image}
        style={{
          backgroundImage: `url(${featured.imgUrl})`,
        }}
      ></div>
      <div className={classes.Title}>{featured.title}</div>
    </div>
  );
}

export default FeaturedTopicImage;
