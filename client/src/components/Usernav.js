import React, { useState,useContext, useEffect } from 'react'
import {Navbar,Container,Nav,Dropdown} from "react-bootstrap"
import {Logincontext} from '../context/Logincontext'
import axios from 'axios'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { useNavigate } from 'react-router-dom';
import GoogleLogout from 'react-google-login';
function Usernav() {
  const navigate=useNavigate()
  const{userContacts}=useContext(Logincontext);
  const [category,setCategory]=useState([])
  const [catg,setCatg]=useState([])
//   const setDropdownValue=(e)=>{
//     setCatg=e.target.value
//     console.log(JSON.stringify(catg));
// }
 useEffect(()=>{
    axios.get("http://localhost:5000/showCategory").then((res)=>{
      setCategory(res.data.data)
    console.log(category);
    })
  },[])
 const showSinglecategory=(id)=>{
console.log(id);
navigate(`/showuseritems/${id}`)
 }
//   const mapout=category.map((data,i)=>{
//     console.log("maped data"+JSON.stringify(data.categoryName));
//     return(<Dropdown.Item>{data.categoryName}</Dropdown.Item>)
// })
  return (
    <div> <Navbar variant="dark">
    <Container>
      
      <Navbar.Brand href="#home"><h2>FOODEE</h2></Navbar.Brand>
      <Nav className="d-flex">
      <Nav.Link ><h4> <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" >
              Category
            </Dropdown.Toggle>
          
            <Dropdown.Menu style={{ width: '100%' }}>
                          {category.map((value,index)=>{
                            return(
                              <Dropdown.Item key={index} onClick={(()=>{console.log("category"+value._id);showSinglecategory(value._id)})}>{value.categoryName}</Dropdown.Item>

                            )
                          })}
                           </Dropdown.Menu>
          </Dropdown> </h4>
          </Nav.Link>
        <Nav.Link href="/addtocart"><h4>CART</h4></Nav.Link>
        <Nav.Link href="#pricing"><h4>ABOUT US </h4></Nav.Link> 
        {/* <Nav.Link href="/addtocart"> 
        <GoogleLogout
      buttonText={localStorage.getItem('userename')}
      
    >
    </GoogleLogout></Nav.Link> */}
      </Nav>
    </Container>
    </Navbar></div>
  )
}

export default Usernav