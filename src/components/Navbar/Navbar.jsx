import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <NavLink className="navbar__links">Ubicaciones</NavLink>
        <NavLink className="navbar__links">Apartamentos</NavLink>
        <NavLink className="navbar__links">Galeria</NavLink>
        <NavLink className="navbar__links">Sobre nosotros</NavLink>
        <div className='buttons'>
        <button className='button-contact'>Contáctanos</button>
        <button className='button-reserve'>Reserva Ya</button>
        </div>
    </nav>
  )
}

export default Navbar