import React, { useState } from "react";
import classes from "./LatestPosts.module.css";
import LatestPostImage from "./LatestPostImage/LatestPostImage";
import { useHistory } from "react-router-dom";

function LatestPosts({ posts, removeButton }) {

  const history = useHistory();
  const goTo = () => {
    console.log('clicked')
    // history.push("/");
    window.location.href = "/";
  }
  const goToPost = () => {
    console.log('clicked')
    history.push("/post");

  }



  return (
    <div>
      <ul className={classes.ImageList}>
        {posts.map((post, index) => (
          <li key={index} onClick={goToPost} style={{ cursor: 'pointer' }}>
            <LatestPostImage post={post} />
          </li>
        ))}
      </ul>
      {!removeButton && <div className={classes.ButtonWrapper}>
        <button className={classes.Button} onClick={goTo}>READ MORE</button>
      </div>}
    </div>
  );
}

export default LatestPosts;
