import React, { useEffect, Fragment } from "react";
import { connect } from 'react-redux';
import classes from "./Content.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import TitleLine from "../TitleLine/TitleLine";
import FeaturedTopic from "../FeaturedTopic/FeaturedTopic";
import OPRPLatform from "../OPRPlatform/OPRPLatform";
import SocialIcons from "../SocialIcons/SocialIcons";
import LatestsPosts from "../LatestPosts/LatestPosts";
import { fetchPosts } from '../../store/actions/posts.actions';

function Content({ posts, getPosts, loading }) {

  useEffect(() => {
    getPosts();
  }, [])


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
            <button className={classes.TitleButton}>READ MORE</button>
          </div>
          <div className={classes.ProgressBarWrapper}>
            <ProgressBar posts={posts.slice(1, 4)} />
          </div>
          <div className={classes.WorldMap}></div>
        </section>
        }
        <section className={classes.SectionSecond}>
          <TitleLine margin="15rem" title="Latest Posts" />
          <LatestsPosts />
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
      <footer className={classes.Footer}>
        <img
          src={require("../../assets/images/city.jpeg")}
          className={classes.FooterImage}
          alt="footerImage"
        ></img>
        <div className={classes.FooterContent}>
          <div className={classes.FooterSocial}>
            <p>Find Us Here</p>
            <SocialIcons />
          </div>
          <img
            className={classes.FooterLogo}
            src={require("../../assets/images/logo_transp_text.png")}
            alt="footerLogo"
          ></img>
          <div className={classes.FooterSubscribe}>
            <p>Subscribe to our</p>
            <button className={classes.FooterSubscribeButton}>
              Newsletter
            </button>
          </div>
        </div>
        <div>
          <p className={classes.Copyright}>
            All rights reserved &#169; One Planet Rating 2019
          </p>
        </div>
      </footer>
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
