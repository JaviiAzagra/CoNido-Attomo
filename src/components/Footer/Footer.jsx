import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__links'>
            <div className='footer__links--row'>
                <h5>Locations</h5>
                <a>Berlin</a>
                <a>Barcelona</a>
                <a>Madrid</a>
                <a>Lisbon</a>
                <a>Milan</a>
            </div>
            <div className='footer__links--row'>
                <h5>Company</h5>
                <a>About</a>
                <a>Careers</a>
                <a>Terms</a>
                <a>Imprint</a>
                <a>Privacy</a>
                <a>Press</a>
            </div>

            <div className='footer__links--row'>
                <h5>Partnership</h5>
                <a>Landlords</a>
                <a>Corporates</a>
            </div>
        </div>

        <div className='footer__social'>
            <div className='footer__social--img'>
                <a><img src="/assets/footer/facebook.svg" alt="facebook" /></a>
                <a><img src="/assets/footer/twitter.svg" alt="twitter" /></a>
                <a><img src="/assets/footer/instagram.svg" alt="instagram" /></a>
                <a><img src="/assets/footer/linkedin.svg" alt="linkedin" /></a>
            </div>
            <div className='footer__social--legal'>
                <a>Aviso legal | </a>
                <a> Protección de datos | </a>
                <a>Cookies</a>
                <p>Powered by <span>Attomo</span></p>
                <p>© 2022 Alfa Real</p>
            </div>
        </div>

        <div className='footer__info'>
            <p>Coliving</p>
            <p>Calle 12 28015 - Madrid</p>
            <p>912 000 000 - 900 000 322</p>
            <p>contacto@coliving.es</p>
        </div>

    </div>
  )
}

export default Footer