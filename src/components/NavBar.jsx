import React from 'react'
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const NavBar = () => {



  return (

    <>
     <Navbar bg="" expand="lg">
     <Container>
        <Navbar.Brand href="#home">
        <Link to={`/`}>
          <img src="/public/img/roxyam.png" alt="roxyam" className='logo' />
        </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="DRUMSHOP" id="basic-nav-dropdown">
              <Link to={`/categoria/${'BATERIAS'}`}>
              <NavDropdown.Item href="#action/3.1">BATERIAS</NavDropdown.Item>
              </Link>
              <Link to={`/categoria/${'BAQUETAS'}`}>
              <NavDropdown.Item href="#action/3.2">
                BAQUETAS
              </NavDropdown.Item>
              </Link>
              <Link to={`/categoria/${'RESPyACC'}`}>
              <NavDropdown.Item href="#action/3.3">RESPUESTOS Y ACCESORIOS</NavDropdown.Item>
              </Link>

            </NavDropdown>
          </Nav>

          <Nav className="me-auto">
            <NavDropdown title="GUITARRAS Y BAJOS" id="basic-nav-dropdown">
              <Link to={`/categoria/${'GUITARRAS'}`}>
              <NavDropdown.Item href="#action/3.1">GUITARRAS</NavDropdown.Item>
              </Link>
              <Link to={`/categoria/${'BAJOS'}`}>
              <NavDropdown.Item href="#action/3.2">
                BAJOS
              </NavDropdown.Item>
              </Link>
              <Link to={`/categoria/${'ACC-GyB'}`}>
              <NavDropdown.Item href="#action/3.3">ACCESORIOS</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>

          <Nav className="me-auto">
            <NavDropdown title="TECLADOS" id="basic-nav-dropdown">
              <Link to={`/categoria/${'ORGANOS'}`}>
              <NavDropdown.Item href="#action/3.1">ORGANOS</NavDropdown.Item>
              </Link>
              <Link to={`/categoria/${'PIANOS'}`}>
              <NavDropdown.Item href="#action/3.2">
                PIANOS
              </NavDropdown.Item>
              </Link>
              <Link to={`/categoria/${'ACC-OyP'}`}>
              <NavDropdown.Item href="#action/3.3">ACCESORIOS</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>

          <Nav className="me-auto">
            <NavDropdown title="SONIDO" id="basic-nav-dropdown">
              <Link to={`/categoria/${'MICROFONOS'}`}>
              <NavDropdown.Item href="#action/3.1">MICROFONOS</NavDropdown.Item>
              </Link>
              <Link to={`/categoria/${'AURICULARES'}`}>
              <NavDropdown.Item href="#action/3.2">
                AURICULARES
              </NavDropdown.Item>
              </Link>
              <Link to={`/categoria/${'ACC-MyA'}`}>
              <NavDropdown.Item href="#action/3.3">ACCESORIOS</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    <CartWidget/>
      </Container>
     </Navbar>

    
  
    </>
  )
}



export default NavBar