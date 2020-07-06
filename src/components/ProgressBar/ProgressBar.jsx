import React, { useState } from "react";
import classes from "./ProgressBar.module.css";

function ProgressBar() {
  const [posts, setPosts] = useState([
    { title: "The ultimate GTQ guide to " },
    { title: "The ultimate GTQ guide to Atlanta" },
    { title: "The ultimate GTQ guide to Atlanta" },
    { title: "The ultimate GTQ guide to Atlanta" },
  ]);
  return (
    <div className={classes.TimelineWrapper}>
      <div className={classes.Timeline}></div>
      {posts.map((post, index) => (
        <div className={classes.Node} key={index}>
          <p className={classes.NodeFeatured}>Featured Article</p>
          <p className={classes.NodeTitle}>{post.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
