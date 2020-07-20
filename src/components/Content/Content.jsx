import React, { useEffect, Fragment, useState } from "react";
import { connect } from 'react-redux';
import classes from "./Content.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import TitleLine from "../TitleLine/TitleLine";
import FeaturedTopic from "../FeaturedTopic/FeaturedTopic";
import OPRPLatform from "../OPRPlatform/OPRPLatform";
import LatestsPosts from "../LatestPosts/LatestPosts";
import { fetchPosts } from '../../store/actions/posts.actions';
import { useHistory } from "react-router-dom";

function Content({ posts, getPosts, loading }) {

  useEffect(() => {
    getPosts();
  }, [])

  const history = useHistory();
  const goToPost = () => {
    history.push("/post");
    // window.location.href = "/";
  };

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


  console.log('posts:', posts && posts.length > 0 && posts[0].title)
  return (
    <Fragment>
      <main>
        {posts && posts.length > 0 && <section className={classes.SectionFirst} style={{
          backgroundImage:
            `linear-gradient(to right, rgba(0, 0, 0, 0.31),  rgba(0, 0, 0, 0.31)),
            url(${posts[0].imgUrl})`
        }}>
          <div className={classes.Text}>
            <div className={classes.Title}>
              {posts[0].title}
            </div>
            <button className={classes.TitleButton} onClick={() => goToPost()}>READ MORE</button>
          </div>
          <div className={classes.ProgressBarWrapper}>
            <ProgressBar posts={posts.slice(1, 5)} />
          </div>
          <div className={classes.WorldMap}></div>
        </section>
        }
        <section className={classes.SectionSecond}>
          <TitleLine margin="15rem" title="Latest Posts" />
          <LatestsPosts posts={latestsPosts} removeButton={false} />
        </section>

        <section className={classes.ThirdSection}></section>

        <section className={classes.FeaturedTopic}>
          <TitleLine title="Featured Topics" margin="30rem" />
          <FeaturedTopic />
        </section>

        <section className={classes.OPRPlatform}>
          <TitleLine title="OPR Platform" margin="60rem" />
          <OPRPLatform />
        </section>

        <section className={classes.FeaturedTopic2}>
          <TitleLine margin="38rem" title="Featured Topics" />
          <div className={classes.FT2Wrapper}>
            <img
              className={classes.FT2Image}
              src={require("../../assets/images/Image 1.png")}
              alt="ft2image"
            />
            <div className={classes.Background}></div>
            <div className={classes.FT2Images}>
              <img
                className={classes.FT2SingleImage}
                src={require("../../assets/images/b1.png")}
                alt="singleImage1"
              ></img>
              <img
                className={classes.FT2SingleImage}
                src={require("../../assets/images/b1.png")}
                alt="singleImage2"
              ></img>
              <img
                className={classes.FT2SingleImage}
                src={require("../../assets/images/b1.png")}
                alt="singleImage3"
              ></img>
              <img
                className={classes.FT2SingleImage}
                src={require("../../assets/images/b1.png")}
                alt="singleImage4"
              ></img>
            </div>
          </div>
        </section>
      </main>
    </Fragment >
  );
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(fetchPosts()),
});

const mapStateToProps = state => ({
  posts: state.posts.posts,
  loading: state.isLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
