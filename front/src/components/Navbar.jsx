import React from "react";
import { Link } from "react-router-dom";
import style from '../styles/navbar.module.css'
import { FaImdb } from 'react-icons/fa';  
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Badge } from 'react-bootstrap';
import Search from '../containers/Search'


const Navbar2 = () => {


  return (

    <div >
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><FaImdb className={style.icon}/></Navbar.Brand>
  <Search />
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search"  />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse >
  
  <Button variant="warning">Sing In</Button>
  <Button variant="warning">Login</Button>

</Navbar>
      </div>
  );
};

export default Navbar2;
