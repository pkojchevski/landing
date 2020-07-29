import React from "react";
import classes from "./LatestPostImage.module.css";

function LatestPostImage({ post }) {
  return (
    <div className={classes.ImageWrapper}>
      <img src={post.imgUrl} alt="Latest Post img"></img>
      <div className={classes.Title}>{post.tag}</div>
      <div className={classes.Background}></div>
      <p className={classes.Text}>{post.content}</p>
      <div className={classes.CardFooter}>
        <p className={classes.Team}>Team OPR Member</p>
        <p className={classes.Date}>{post.date}</p>
      </div>
    </div>
  );
}

export default LatestPostImage;
