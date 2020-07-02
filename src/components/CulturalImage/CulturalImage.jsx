import React from 'react'
import classes from './CulturalImage.module.css'

function CulturalImage({ img }) {
    return (
        <div className={classes.ImageWrapper}>
            <img src={img}></img>
            <div className={classes.Background}></div>
        </div>
    )
}

export default CulturalImage