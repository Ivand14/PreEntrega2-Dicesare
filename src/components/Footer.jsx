import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo-tienda">
            <img src="/img/klipartz.com.png" alt="klipartz" />
            <h2>ROXAYAM TIENDA DE INSTRUMENTOS MUSICALES</h2>
            <div className="icons">
            <i className="bi bi-instagram"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-whatsapp"></i>
            </div>
        </div>

        <div className="datos-tienda">
            <div className="titulo-datos">
                <h2 className='text-principal'>ROXYAM TIENDA DE INSTRUMENTOS MUSICALES</h2>
                <p>COMPRÁ ONLINE Y EN CUOTAS, Y RECIBILO EN TU CASA</p>
            </div>

            <div className="contacto-datos">
                <h2 className='text-principal'>CONTACTO</h2>
                <p><i className="bi bi-envelope"></i> roxyam@gmail.com</p>
                <p><i className="bi bi-geo-fill"></i> MENDOZA,CAPITAL AV.SANMARTIN 334</p>
                <p><i className="bi bi-clock"></i> LUNES A VIERNES 10:00Hs a 19:00Hs</p>

            </div>
        </div>


    </div>
  )
}

export default Footer