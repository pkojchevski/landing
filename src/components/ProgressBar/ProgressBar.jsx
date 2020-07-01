import React from 'react'
import classes from './PrograssBar.module.css'
function Header() {
    return (
        <div className={classes.ProgressBar}>
      <ul className={classes.ProgressBarList}>
        <li class="active">Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
      </ul>
        </div>
    )
}

export default Header
