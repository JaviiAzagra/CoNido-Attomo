import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <NavLink className="navbar__links">Ubicaciones <img src="/assets/navbar/vector.svg" alt="vector" /></NavLink>
        <NavLink className="navbar__links">Apartamentos</NavLink>
        <NavLink className="navbar__links">Galeria</NavLink>
        <NavLink className="navbar__links">Sobre nosotros <img src="/assets/navbar/vector.svg" alt="vector" /></NavLink>
        <div className='buttons'>
        <button className='button-contact'>Contáctanos</button>
        <button className='button-reserve'>Reserva Ya</button>
        <img src="/assets/navbar/user.svg" alt="user" />
        </div>
        <p>ES <img src="/assets/navbar/vector.svg" alt="vector" /></p>
    </nav>
  )
}

export default Navbar