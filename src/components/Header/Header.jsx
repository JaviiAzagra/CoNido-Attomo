import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Header.scss";

const Header = () => {
  return (
    <div className='header'>
        <div className='header__nav'>
        <img className='header__img' src='/assets/header/logo.svg' alt='logo'/>
        <Navbar/>
        </div>
        <div className='header__logo'>
            <img src="/assets/header/logo.svg" alt="logo" />
        </div>
    </div>
  )
}

export default Header

