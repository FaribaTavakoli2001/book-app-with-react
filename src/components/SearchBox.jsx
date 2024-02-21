import React from 'react'
import { FaSearch } from "react-icons/fa";

import styles from './Search.module.css'

function SearchBox({search , setSearch , searchHandler}) {
  return (
    <div className={styles.search}><input type='text' 
    placeholder='Search title' 
    value={search}
    onChange={(e) => setSearch(e.target.value.toLowerCase())}
    />
    <button onClick={searchHandler}><FaSearch /></button>
    </div>
  )
}

export default SearchBox