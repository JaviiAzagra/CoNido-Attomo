import React from 'react'
import "./Ubications.scss";

const Ubications = () => {
  return (
    <div className='ubicaciones'>
        <h1>Ubicaciones</h1>
        <p>Viviendas únicas y exclusivas en una zona privilegiada de Madrid, Barcelona o Bilbao entre otras.</p>
        <div className='ubicaciones__citys'>

            <div className='container'>
                <h3 className='container__title'>BARCELONA</h3>
                <img className='container__barcelona' src="/assets/ubications/barcelona.svg" alt="barcelona" />
                <button className='container__button' >Ver más</button>
            </div>

            <div className='container'>
                <h3 className='container__title'>MADRID</h3>
                <img className='container__madrid' src="/assets/ubications/madrid.svg" alt="madrid" />
                <button className='container__button'>Ver más</button>
            </div>

            <div className='container'>
                <h3 className='container__title'>BILBAO</h3>
                <img className='container__bilbao' src="/assets/ubications/bilbao.svg" alt="bilbao" />
                <button className='container__button'>Ver más</button>
            </div>

        </div>
    </div>
  )
}

export default Ubications