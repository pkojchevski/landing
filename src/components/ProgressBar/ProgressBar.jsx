import React from "react";
import classes from "./ProgressBar.module.css";
import { useHistory } from "react-router-dom";
function ProgressBar({ posts }) {
  const history = useHistory();
  const goToPost = () => {
    history.push("/post");

  }
  return (
    <div className={classes.TimelineWrapper} onClick={goToPost}>
      <div className={classes.Timeline}></div>
      {posts.map((post, index) => (
        <div className={classes.Node} key={index} style={{ cursor: 'pointer' }}>
          <p className={classes.NodeFeatured}>Featured Article</p>
          <p className={classes.NodeTitle}>{post.title}</p>
        </div>
      ))
      }
    </div >
  );
}

export default ProgressBar;
