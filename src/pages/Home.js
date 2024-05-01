import React from "react";
// import { Link } from "react-router-dom";
import {Container, Nav, NavDropdown, Navbar} from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Projeto React</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Atividades" id="basic-nav-dropdown">
                <NavDropdown.Item href="/atividade-1">Atividade 1</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/atividade-2">Atividade 2</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </> 
  );
  
}

export default Home;
