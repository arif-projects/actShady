import React from 'react';
import './Navber.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Navber = () => {
  const {users,logOut} = UseAuth();
    return (
        <div className ="navber">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
    <Container>
    <Navbar.Brand href="#home">Act Shady</Navbar.Brand>
    <Navbar.Toggle />

    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#features">Features</Nav.Link>
      <Nav.Link as={HashLink} to="/home#testimonial">Testimonial</Nav.Link>
      

      { users?.email?
          <>
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
           <Navbar.Text>
         <a href="#login">{users?.displayName}</a>
      </Navbar.Text>
           <Button onClick = {logOut} variant="light">LogOut</Button>
          </>:
        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
    </Navbar.Collapse>
    </Container>
    </Navbar>
        </div>
    );
};

export default Navber;