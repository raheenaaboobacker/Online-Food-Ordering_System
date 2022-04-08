import React, { useState,useContext } from 'react'
import {Navbar,Container,Nav,Dropdown} from "react-bootstrap"
import {Logincontext} from '../context/Logincontext'
function Usernav() {
  const{userContacts}=useContext(Logincontext);
//   const [category,setCategory]=useState([])
//   const setDropdownValue=(e)=>{
//     setCatg=e.target.value
//     console.log(JSON.stringify(catg));
// }
  
//   const mapout=category.map((data,i)=>{
//     console.log("maped data"+JSON.stringify(data));
//     return(
//         <Dropdown.Item onChange={setDropdownValue} value={data.categoryName}  key={i}>{data.categoryName}</Dropdown.Item>
          
//     )
// })
  return (
    <div> <Navbar variant="dark">
    <Container>
      
      <Navbar.Brand href="#home"><h2>FOODEE</h2></Navbar.Brand>
      <Nav className="d-flex">
      <Nav.Link ><h4> <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Category
            </Dropdown.Toggle>
          
            <Dropdown.Menu>
             {/* {mapout} */}
            </Dropdown.Menu>
          </Dropdown> </h4></Nav.Link>
        <Nav.Link href={`/addtocart/${userContacts.id}`}><h4>CART</h4></Nav.Link>
        <Nav.Link href="#pricing"><h4>ABOUT US</h4></Nav.Link>
      </Nav>
    </Container>
    </Navbar></div>
  )
}

export default Usernav