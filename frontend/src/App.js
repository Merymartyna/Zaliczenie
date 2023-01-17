
import React from 'react';
import Pets from './components/Pets';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'




function App() {
  return (
    <div className="App">
     <div className="text-center">
        <Image className='text-center'
        src="https://img.freepik.com/free-icon/dog-pawprint_318-116638.jpg?w=360"
      /></div>
   <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">AdoptMe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="text-center">
        <Image className='text-center'
        src="https://www.aphis.usda.gov/wcm/connect/c435b26e-3822-4276-9875-67eafa8111d3/1/not-all-birds-animals-qualify-as-pets-med.png?MOD=AJPERES&CVID="
      /></div>
   <Pets  />
 
    </div>
  );
}

export default App;
