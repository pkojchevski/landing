import React from "react";
import classes from "./Content.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import imgFirst from "../../assets/images/1.png";
import imgSecond from "../../assets/images/2.png";
import imgThird from "../../assets/images/3.png";
import imgQuarter from "../../assets/images/4.png";
import CulturalImage from "../CulturalImage/CulturalImage";
import WorldMap from "../../assets/images/worldmap.png";
import TitleLine from "../TitleLine/TitleLine";
import FeaturedTopic from "../FeaturedTopic/FeaturedTopic";
import OPRPLatform from "../OPRPlatform/OPRPLatform";

// const blogs = [{ image: '../../assets/images/stock-photo-winters-karlskrona-november-2015-129077569.png', title: '5 ways yu can help reduce over-tourism' }]
function Content() {
  return (
    <>
      <main>
        <section className={classes.SectionFirst}>
          <div className={classes.Text}>
            <div className={classes.Title}>
              5 ways you can help reduce over-tourism
            </div>
            <button className={classes.TitleButton}>READ MORE</button>
          </div>
          <div className={classes.ProgressBarWrapper}>
            <ProgressBar />
          </div>
          <div className={classes.WorldMap}></div>
        </section>
        <section className={classes.SectionSecond}>
          <TitleLine margin="15rem" title="Latest Posts" />
          <ul className={classes.ImageList}>
            <li>
              <CulturalImage img={imgFirst} />
            </li>
            <li>
              <CulturalImage img={imgSecond} />
            </li>
            <li>
              <CulturalImage img={imgThird} />
            </li>
            <li>
              <CulturalImage img={imgQuarter} />
            </li>
          </ul>
          <div className={classes.SecondSectionButtonWrapper}>
            <button className={classes.SecondSectionButton}>READ MORE</button>
          </div>
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
          <TitleLine margin="15rem" title="Featured Topics" />
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
            <p>Find us here</p>
            <SocialIcons />
          </div>
          <img className={classes.FooterLogo}>
            src={require("../../assets/images/logo_transparent.png")}
          </img>
          <div className={classes.FooterSubscribe}>
            <p>subscribe to our</p>
            <button>Newsletter</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Content;
