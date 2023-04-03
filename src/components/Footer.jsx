import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo-tienda">
            <img src="/public/img/klipartz.com.png" alt="klipartz" />
            <h2>ROXAYAM TIENDA DE INSTRUMENTOS MUSICALES</h2>
            <div className="icons">
            <i class="bi bi-instagram"></i>
            <i class="bi bi-youtube"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-whatsapp"></i>
            </div>
        </div>

        <div className="datos-tienda">
            <div className="titulo-datos">
                <h2 className='text-principal'>ROXYAM TIENDA DE INSTRUMENTOS MUSICALES</h2>
                <p>COMPRÁ ONLINE Y EN CUOTAS, Y RECIBILO EN TU CASA</p>
            </div>

            <div className="contacto-datos">
                <h2 className='text-principal'>CONTACTO</h2>
                <p><i class="bi bi-envelope"></i> roxyam@gmail.com</p>
                <p><i class="bi bi-geo-fill"></i> MENDOZA,CAPITAL AV.SANMARTIN 334</p>
                <p><i class="bi bi-clock"></i> LUNES A VIERNES 10:00Hs a 19:00Hs</p>

            </div>
        </div>


    </div>
  )
}

export default Footer