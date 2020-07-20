import React from 'react'
import classes from './Footer.module.css'

import SocialIcons from '../SocialIcons/SocialIcons'

function Footer() {
    return (
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
    )
}

export default Footer
