import React from 'react'
import "./Contact.scss";

const Contact = () => {
  return (
    <div className='contact'>
        <h1>Contacto</h1>
        <div className='contact__container'>
            <div className='contact__container--img'></div>
            <div className='contact__container--form'>
                <h3>Solicita Información</h3>
                <label><p>Nombre</p></label>
                <input type="text"/>
                <label><p>Teléfono</p></label>
                <input type="tel"/>
                <label><p>Email</p></label>
                <input type="email"/>
                <label><p>Mensaje</p></label>
                <textarea type="text"></textarea>
                <div className='button'>
                    <button>Enviar Solicitud</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact