import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router ,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Visionapp from './Visionapp';
import Informacion from './Informacion';








export default class Navbarcomp extends Component {
    render() {
        return (

            <Router>
            <div>
                
                <Navbar bg="dark" variant={"dark"} expand="lg"  >
    <Container>
    
    <Navbar.Brand href="Contact"> SENA - Centro de Biotecnologia Industrial Palmira </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link as={Link} to={"/Contact"}>Inicio</Nav.Link>
        <Nav.Link as={Link} to={"/Home"}>Perfil </Nav.Link>
        
        






        <NavDropdown title="CBI" id="basic-nav-dropdown">
          <NavDropdown.Item href="./About">Mision</NavDropdown.Item>
          <NavDropdown.Item href="./Visionapp">Visión</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="./Informacion">Informacion</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>

            <div>

            <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Visionapp">
            <Visionapp />
          </Route>
          <Route path="/Informacion">
            <Informacion />
          </Route>
        </Switch>
            </div>
            </Router>
        )
    }
}
