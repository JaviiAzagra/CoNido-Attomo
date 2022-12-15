import React from 'react'
import "./Gallery.scss";

const Gallery = () => {
  return (
    <div className='gallery'>
        <h1>Galería</h1>
        <p>Entra y elige la que mejor se adapte a tus necesidades y a tus sueños.</p>
        <div className='gallery__images'>
          <img src="/assets/gallery/imagen2.svg" alt="imagen2" />
          <img src="/assets/gallery/imagen3.svg" alt="imagen3" />
          <img className='imagen' src="/assets/gallery/imagen.svg" alt="imagen" />
          <img src="/assets/gallery/imagen4.svg" alt="imagen4" />
          <img src="/assets/gallery/imagen5.svg" alt="imagen5" />
        </div>

        <div className='gallery__ellipse'>
          <img src="/assets/gallery/ellipse.svg" alt="ellipse" />
          <img src="/assets/gallery/ellipse.svg" alt="ellipse2" />
          <img src="/assets/gallery/ellipse.svg" alt="ellipse3" />
        </div>
    </div>
  )
}

export default Gallery