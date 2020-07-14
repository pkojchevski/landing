import React from "react";
import classes from "./FeaturedTopicImage.module.css";
import { useHistory } from "react-router-dom";

function FeaturedTopicImage({ featured }) {
  const history = useHistory();
  const goTo = (featured) => {
    console.log('clicked')
    // history.push("/");
    window.location.href = "/";
  }

  return (
    <div className={classes.ImageWrapper} onClick={() => goTo(featured)}>
      {/* <div src={featured.imgUrl} alt="Environmental" /> */}
      <div
        className={classes.Image}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(38,132,173, 0.3), rgba(38,132,173, 0.3)),url(${featured.imgUrl})`,
        }}
      ></div>
      <div className={classes.Title}>{featured.title}</div>
    </div>
  );
}

export default FeaturedTopicImage;
