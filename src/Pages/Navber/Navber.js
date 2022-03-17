import React from 'react';
import './Navber.css'
import {Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import { Button } from '@mui/material';

const Navber = () => {
  const {users,logOut} = UseAuth();
    return (
        <div className ="navber">
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" sticky="top" >
    <Container>
    <Navbar.Brand href="#home">
      <h3 className = "text text-primary">Act Shady</h3>
    </Navbar.Brand>
    <Navbar.Toggle />

    <Navbar.Collapse className="justify-content-end menu-item">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#features">Features</Nav.Link>
      <Nav.Link as={HashLink} to="/home#testimonial">Testimonial</Nav.Link>
      

      { users?.email?
          <>
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
           <Navbar.Text>
         <a className = "text text-primary" href="#login">{users?.displayName}</a>
      </Navbar.Text>
           <Button onClick = {logOut} variant="outlined">LogOut</Button>
          </>:
        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
    </Navbar.Collapse>
    </Container>
    </Navbar>
        </div>
    );
};

export default Navber;