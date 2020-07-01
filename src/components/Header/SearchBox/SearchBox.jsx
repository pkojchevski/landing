import React from 'react'
import classes from './SearchBox.module.css'

function SearchBox() {
    return (
        <div className={classes.Search}>
             <input className={classes.SearchInput} type="text" ></input>
        </div>
    )
}

export default SearchInput
