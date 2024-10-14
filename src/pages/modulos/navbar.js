import {Container, Nav, Navbar, NavDropdown}from 'react-bootstrap';
import styles from "@/styles/navbar.module.css"
export default function Menu() {
  return ( 
  <Container>
    <Navbar expand="sm" className={`${styles.navgradiente} bg-primary-subtle px-0 my-0`}>
     
        <Navbar.Brand href="#home">6A</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Produtos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </Container>
  );
}

