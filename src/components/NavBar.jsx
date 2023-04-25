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
                <Nav.Link to={`/categoria/${'BATERIAS'}`}>
                  BATERIAS
                </Nav.Link>
                <Nav.Link href={`/categoria/${'BAQUETAS'}`}>
                  BAQUETAS
                </Nav.Link>
                <Nav.Link href={`/categoria/${'RESPyACC'}`}>
                  RESPUESTOS Y ACCESORIOS
                </Nav.Link>

            </NavDropdown>
          </Nav>

          <Nav className="me-auto">
            <NavDropdown title="GUITARRAS Y BAJOS" id="basic-nav-dropdown">
              
                <Nav.Link href={`/categoria/${'GUITARRAS'}`}>
                  GUITARRAS
                </Nav.Link>
                <Nav.Link href={`/categoria/${'BAJOS'}`}>
                  BAJOS
                </Nav.Link>
                <Nav.Link href={`/categoria/${'ACC-GyB'}`}>
                  ACCESORIOS
                </Nav.Link>
                
            </NavDropdown>
          </Nav>

          <Nav className="me-auto">
            <NavDropdown title="TECLADOS" id="basic-nav-dropdown">
                <Nav.Link href={`/categoria/${'ORGANOS'}`}>
                  ORGANOS
                </Nav.Link>
                <Nav.Link href={`/categoria/${'PIANOS'}`}>
                  PIANOS
                </Nav.Link>
                <Nav.Link href={`/categoria/${'ACC-OyP'}`}>
                  ACCESORIOS
                </Nav.Link>
            </NavDropdown>
          </Nav>

          <Nav className="me-auto">
            <NavDropdown title="SONIDO" id="basic-nav-dropdown">
                <Nav.Link href={`/categoria/${'MICROFONOS'}`}>
                  MICROFONOS
                </Nav.Link>
                <Nav.Link href={`/categoria/${'AURICULARES'}`}>
                  AURICULARES
                </Nav.Link>
                <Nav.Link href={`/categoria/${'ACC-MyA'}`}>
                  ACCESORIOS
                </Nav.Link>
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