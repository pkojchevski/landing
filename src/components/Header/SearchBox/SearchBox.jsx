import React from 'react'
import classes from './SearchBox.module.css'
import { FaSearch } from 'react-icons/fa';

function SearchBox() {
    return (
        <div className={classes.Search}>
            <input className={classes.SearchInput} type="text" ></input>
            <div className={classes.SearchIcon}>
                <FaSearch />
            </div>
        </div>
    )
}

export default SearchBox
