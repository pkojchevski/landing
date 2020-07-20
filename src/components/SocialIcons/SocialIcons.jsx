import React from 'react'
import classes from './SocialIcons.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function SocialIcons({ color, size, twitter, facebook, instagram }) {
  return (

    <div className={classes.SocialIcons} style={{ color: `${color}`, fontSize: `${size}`, }}>
      <FaTwitter style={{ color: `${twitter}` }} />
      <FaFacebook style={{ color: `${facebook}` }} />
      <FaInstagram style={{ background: `${instagram}` }} />
    </div>

  )
}

export default SocialIcons