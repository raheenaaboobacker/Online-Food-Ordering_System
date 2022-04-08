import React,{useEffect,useState} from 'react'
import Adminnav from '../../../components/Adminnav'
import axios from 'axios'
import {Row,Col,Card,Stack,Button} from 'react-bootstrap'

import { useParams,Link } from 'react-router-dom'

function Showitems() {
    const {id}=useParams()
    // console.log(name);
    const[items,setItems]=useState([])
    useEffect(() => {
        console.log(JSON.stringify(id))
        axios.get(`http://localhost:5000/admin/showitems/${id}`).then((response)=>{
            
       console.log("Showed data"+JSON.stringify(response.data.data));
       setItems(response.data.data) 
      
      console.log(JSON.stringify(items));
        }) 
       }, [])
       const deleteitem=(id)=>{
        console.log("deleted id"+JSON.stringify(id))
        axios.delete(`http://localhost:5000/admin/deleteitem/${id}`)
       }
  return (
    <div>
        <Adminnav/>
        <h1></h1>
  <Row xs={1} md={2} className="g-4">
  
    
    {items.map((u)=>(
                <Card  id="cd" >
                <Card.Img variant="top" style={{width:"450px",height:"450px"}} src={`../upload/${u.image}`} />
                <Card.Body>
                  <Card.Title>Name:{u.productName}</Card.Title>
                  <Card.Title>Price:{u.price}</Card.Title>
                  <Card.Title>Instock:{u.instock}</Card.Title>
                 
                  <Link to={`/updateitem/${u._id}`}>
        <Button variant="success" type="submit"  >
           Update 
          </Button>
          </Link>
          <br/>
            <Button variant='success' type='submit' onClick={()=>{deleteitem(u._id)}} >
              delete
            </Button>
          
                </Card.Body>
              </Card>
    ))}
    
      
  

</Row>

<Link to={`/additem/${id}`}>
<Button variant="success" type="submit"  >
   Add items
  </Button>
  </Link>

    </div>
  )
}

export default Showitems