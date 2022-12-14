import React from 'react'
import "./Apartaments.scss";

const Apartaments = () => {
  return (
    <div>
        <h1>Apartamentos</h1>
        <div className='search'>
          <input type="search" placeholder='Madrid'/>
          <input type="search" placeholder='Home Type'/>
          <button className='clear-button'>Clear All</button>
        </div>
        <div className='apartments'>

        </div>
        <button className='more-button'>Ver mas</button>
    </div>
  )
}

export default Apartaments