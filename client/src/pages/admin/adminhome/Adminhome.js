import axios from 'axios'
import React, { useEffect ,useState,useContext} from 'react'
import {Row,Col,Card,Stack,Button} from 'react-bootstrap'
import {Link} from "react-router-dom"
import Adminnav from '../../../components/Adminnav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Logincontext} from '../../../context/Logincontext'
function Adminhome() {
  const [category,setCategory]=useState([])
  const [data,setData]=useState({id:""})
  const notify = (data) => toast(data)
  const{userContacts}=useContext(Logincontext);

 useEffect(() => {
   console.log("userContacts"+JSON.stringify(userContacts));
  axios.post("http://localhost:5000/admin/adminhome").then((response)=>{
//  console.log("gyhjk"+JSON.stringify(response.data));
 setCategory(response.data.data) 

console.log(JSON.stringify(category));
  }) 
 }, [])
const deleteCategory=(id)=>{
  console.log("deleted id"+JSON.stringify(id))
  axios.delete(`http://localhost:5000/admin/deletecategory/${id}`).then((response)=>{
    console.log(response.data)
    notify(response.data)
  })
}
  


  return (
    <div>
     <Adminnav/>   
 <h3>welcome </h3>
  <Row xs={1} md={2} className="g-4">
    
    {category.map((u)=>(
                <Card  id="cd" >
                <Card.Img variant="top" style={{width:"450px",height:"450px"}} src={`./upload/${u.image}`} />
                <Card.Body>
                  <Card.Title>{u.categoryName}</Card.Title>
                  <Link to={`/showitems/${u._id}`}>
                  
                    <Button variant="success" type="submit" >
                      Show Items 
                     </Button>
                   </Link>
                   <br/><br/>
                  <Link to={`/additem/${u._id}`}>
        <Button variant="success" type="submit" onClick={()=>{ setData({id:u._id});console.log("add"+data)}} >
           Add Item 
          </Button>
          </Link><br/><br/>
          <Button variant="success" type="submit" onClick={()=>{deleteCategory(u._id)}}>
            deletecategory</Button>
         
                </Card.Body>
              </Card>
    ))}
   
</Row>
<br/><br/>
<Link to='/addcategory'>
<Button variant="success" type="submit" >
   Add Category
  </Button>
  </Link>
  <ToastContainer/>


    </div>
    
  )
}

export default Adminhome