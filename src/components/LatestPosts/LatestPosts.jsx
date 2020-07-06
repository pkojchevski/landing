import React, { useState } from "react";
import classes from "./LatestPosts.module.css";
import LatestPostImage from "./LatestPostImage/LatestPostImage";

function LatestPosts() {
  const [latestsPosts, setLatestsPosts] = useState([
    {
      imgUrl: "./images/1.png",
      content:
        "Connecting hoteliers to the future of hospitality: The mission of I Meet Hotel",
      date: "Jan 21, 2020",
      tag: "#Travel",
    },
    {
      imgUrl: "./images/2.png",
      content:
        "The most influential sustainable travel trends of 2019 (besides Greta Thunberg)",
      date: "Dec 26, 2019",
      tag: "#Travel",
    },
    {
      imgUrl: "./images/3.png",
      content:
        "What is slow travel? Why you should take a pause and experience your next trip",
      date: "Oct 29, 2019",
      tag: "#Travel",
    },
    {
      imgUrl: "./images/4.png",
      content: "5 ways you can help reduce over-tourism",
      date: "Aug 25, 2019",
      tag: "#Travel",
    },
  ]);
  return (
    <div>
      <ul className={classes.ImageList}>
        {latestsPosts.map((post, index) => (
          <li>
            <LatestPostImage post={post} key={index} />
          </li>
        ))}
      </ul>
      <div className={classes.ButtonWrapper}>
        <button className={classes.Button}>READ MORE</button>
      </div>
    </div>
  );
}

export default LatestPosts;