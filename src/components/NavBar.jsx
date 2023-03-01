import React from 'react'
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer';

const NavBar = () => {



  return (

    <>
     <Navbar bg="" expand="lg">
     <Container>
        <Navbar.Brand href="#home"><img src="/public/img/roxyam.png" alt="roxyam" className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="DRUMSHOP" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">BATERIAS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                BAQUETAS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">RESPUESTOS Y ACCESORIOS</NavDropdown.Item>

            </NavDropdown>
          </Nav>

          <Nav className="me-auto">
            <NavDropdown title="GUITARRAS Y BAJOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">GUITARRAS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                BAJOS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ACCESORIOS</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="me-auto">
            <NavDropdown title="TECLADOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ORGANOS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                PIANOS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ACCESORIOS</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="me-auto">
            <NavDropdown title="SONIDO" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">MICROFONOS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                AURICULARES
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ACCESORIOS</NavDropdown.Item>
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