import React from "react";
import classes from "./Content.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import imgFirst from "../../assets/images/1.png";
import imgSecond from "../../assets/images/2.png";
import imgThird from "../../assets/images/3.png";
import imgQuarter from "../../assets/images/4.png";
import CulturalImage from "../CulturalImage/CulturalImage";
import { ReactComponent as WorldMap } from "../../assets/images/worldmap.svg";

// const blogs = [{ image: '../../assets/images/stock-photo-winters-karlskrona-november-2015-129077569.png', title: '5 ways yu can help reduce over-tourism' }]
function Content() {
  return (
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
        <div className={classes.WorldMap}>
          <WorldMap />
        </div>
      </section>
      <section className={classes.SectionSecond}>
        <div className={classes.Title}></div>
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
      </section>
    </main>
  );
}

export default Content;
