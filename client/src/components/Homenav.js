import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
function Homenav() {
  return (
    <div> <Navbar variant="dark">
    <Container>
      
      <Navbar.Brand href="#home"><h2>FOODEE</h2></Navbar.Brand>
      <Nav className="d-flex">
      <Nav.Link href="login"><h4>Login</h4></Nav.Link>
        <Nav.Link href="register"><h4>Register</h4></Nav.Link>
        <Nav.Link href="aboutus"><h4>ABOUT US</h4></Nav.Link>
      </Nav>
    </Container>
    </Navbar></div>
  )
}

export default Homenav