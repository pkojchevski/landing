import React, { useState } from "react";
import classes from "./FeaturedTopic.module.css";
import FeaturedTopicImage from "./FeaturedTopicImage/FeaturedTopicImage";
import { Link } from 'react-router-dom'

function FeaturedTopic() {
  const [featuredTopics, setFeaturedTopics] = useState([
    {
      title: "Environment",
      imgUrl: "./images/Environmental.png",
    },
    { title: "Social", imgUrl: "./images/social.png" },
    { title: "Cultural", imgUrl: "./images/cultural.png" },
  ]);

  return (
    <div className={classes.Featured}>
      {featuredTopics.map((featured, index) => (
        <Link key={index} to={`/${featured.title.toLowerCase()}`}>
          <FeaturedTopicImage  featured={featured} />
        </Link>
      ))}
    </div>
  );
}

export default FeaturedTopic;
