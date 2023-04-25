import 'bootstrap/dist/css/bootstrap.min.css';

import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

const NavBar = () => {



  return (

    <>
      <h2 className="titulo-envios">ENVIOS GRATIS SUPERIORES A LOS 25.000$ <span className="material-symbols-outlined">local_shipping</span></h2>
     <Navbar  expand="lg">
     <Container>
          <Link to={`/`}>
            <img src="/img/klipartz.com.png" alt="roxyam" className='logo' />
          </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto" >
            <NavDropdown title="DRUMSHOP" id="basic-nav-dropdown">
                <Link to={`/categoria/${'BATERIAS'}`} className='LinkNav'>
                  BATERIAS
                </Link>
                <Link to={`/categoria/${'BAQUETAS'}`} className='LinkNav'>
                  BAQUETAS
                </Link>
                <Link to={`/categoria/${'RESPyACC'}`} className='LinkNav'>
                  RESPUESTOS Y ACCESORIOS
                </Link>

            </NavDropdown>
          </Nav>

          <Nav className="me-auto">
            <NavDropdown title="GUITARRAS Y BAJOS" id="basic-nav-dropdown">
              
                <Link to={`/categoria/${'GUITARRAS'}`} className='LinkNav'>
                  GUITARRAS
                </Link>
                <Link to={`/categoria/${'BAJOS'}`} className='LinkNav'>
                  BAJOS
                </Link>
                <Link to={`/categoria/${'ACC-GyB'}`}  className='LinkNav'>
                  ACCESORIOS
                </Link>
                
            </NavDropdown>
          </Nav>

          <Nav className="me-auto">
            <NavDropdown title="TECLADOS" id="basic-nav-dropdown">
                <Link to={`/categoria/${'ORGANOS'}`} className='LinkNav'>
                  ORGANOS
                </Link>
                <Link to={`/categoria/${'PIANOS'}`} className='LinkNav'>
                  PIANOS
                </Link>
                <Link to={`/categoria/${'ACC-OyP'}`} className='LinkNav'>
                  ACCESORIOS
                </Link>
            </NavDropdown>
          </Nav>

          <Nav className="me-auto">
            <NavDropdown title="SONIDO" id="basic-nav-dropdown">
                <Link to={`/categoria/${'MICROFONOS'}`} className='LinkNav'>
                  MICROFONOS
                </Link>
                <Link to={`/categoria/${'AURICULARES'}`} className='LinkNav'>
                  AURICULARES
                </Link>
                <Link to={`/categoria/${'ACC-MyA'}`} className='LinkNav'>
                  ACCESORIOS
                </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    <Link to={`/cart`}>
    <CartWidget/>
    </Link>
      </Container>
     </Navbar>

    
  
    </>
  )
}



export default NavBar