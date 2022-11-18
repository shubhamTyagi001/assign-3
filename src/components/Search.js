import React from 'react'
import './Search.css'
import { FaSearch } from "react-icons/fa"
function Search() {
  return (
     <form className='foemstyl' >
      <div className='inner'>
        <FaSearch className='svg'></FaSearch>
        <input className='input'
          type="text"
           placeholder="Please enter user ID"
        />
      </div>
    </form>
  )
}

export default Search