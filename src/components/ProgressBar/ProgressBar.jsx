import React from 'react'
import classes from './ProgressBar.module.css'

function Header() {
  return (
    <div className={classes.TimelineWrapper}>
      <div className={classes.Timeline}></div>
      <div className={classes.Node}>
        <p className={classes.NodeFeatured}>Featured Article</p>
        <p className={classes.NodeTitle}>The ultimate GTQ guite to Atlanta</p>
      </div>
      <div className={classes.Node}>
        <p className={classes.NodeFeatured}>Featured Article</p>
        <p className={classes.NodeTitle}>The ultimate GTQ guite to Atlanta</p>
      </div>
      <div className={classes.Node}>
        <p className={classes.NodeFeatured}>Featured Article</p>
        <p className={classes.NodeTitle}>The ultimate GTQ guite to Atlanta</p>
      </div>
      <div className={classes.Node}>
        <p className={classes.NodeFeatured}>Featured Article</p>
        <p className={classes.NodeTitle}>The ultimate GTQ guite to Atlanta</p>
      </div>
    </div>
  )
}

export default Header
