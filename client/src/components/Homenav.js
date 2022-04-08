import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
function Homenav() {
  return (
    <div> <Navbar variant="dark">
    <Container>
      
      <Navbar.Brand href="#home"><h2>FOODEE</h2></Navbar.Brand>
      <Nav className="d-flex">
      <Nav.Link href="login"><h4>Login</h4></Nav.Link>
        <Nav.Link href="#features"><h4>CART</h4></Nav.Link>
        <Nav.Link href="#pricing"><h4>ABOUT US</h4></Nav.Link>
      </Nav>
    </Container>
    </Navbar></div>
  )
}

export default Homenav