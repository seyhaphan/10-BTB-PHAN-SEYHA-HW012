import React from 'react'
import { Navbar, Form, Button, FormControl, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Menu() {
   return (
      <Navbar bg="light" variant="light">
         <div className="container">
            <Navbar.Brand as={Link} to="/">React Router</Navbar.Brand>
            <Nav className="mr-auto">
               <Nav.Link as={Link} to="/home" >Home</Nav.Link>
               <Nav.Link as={Link} to="/video">Video</Nav.Link>
               <Nav.Link as={Link} to="/account">Account</Nav.Link>
               <Nav.Link as={Link} to="/auth">Auth</Nav.Link>
            </Nav>
            <Form inline>
               <FormControl type="text" placeholder="Search" className="mr-sm-2" />
               <Button variant="outline-info">Search</Button>
            </Form>
         </div>
      </Navbar>
   )
}
