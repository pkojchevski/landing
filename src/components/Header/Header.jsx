import React from 'react'
import classes from './Header.module.css'
function Header() {
    return (
        <nav className={classes.Header}>
            <div className={classes.HeaderIcon}>
                <div className={classes.HeaderLeft}></div>
                <div className={classes.HeaderRight}></div>
            </div>
        </nav>
    )
}

export default Header
