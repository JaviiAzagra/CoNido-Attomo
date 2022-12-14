import React from 'react'
import "./Apartaments.scss";

const Apartaments = () => {
  return (
    <div>
        <h1>Apartamentos</h1>
        <div className='search'>
          <input type="search" placeholder='Madrid'/>
          <input type="search" placeholder='Home Type'/>
          <button> Clear All</button>
        </div>
    </div>
  )
}

export default Apartaments