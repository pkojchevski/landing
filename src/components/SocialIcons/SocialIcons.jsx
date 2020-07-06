import React from 'react'
import classes from './SocialIcons.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function SocialIcons({color, size}) {
  return (
 
        <div className={classes.SocialIcons} style={{color:`${color}`, fontSize:`${size}`}}>
              <FaTwitter />
              <FaFacebook />
              <FaInstagram />
            </div>
  
  )
}

export default SocialIcons