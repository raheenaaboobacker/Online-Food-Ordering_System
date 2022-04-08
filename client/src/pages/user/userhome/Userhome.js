import React,{useEffect,useState,useContext} from 'react'
// import '../.././admin.css'
import {Row,Col,Card,Stack,Button, Form, Modal} from 'react-bootstrap'
import {IconButton ,Paper,InputBase,TextField,Dialog ,
  DialogActions ,DialogContent,DialogContentText,DialogTitle} from '@mui/material'
import {Search,Menu} from "@mui/icons-material"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
import {Logincontext} from '../../../context/Logincontext'
import Usernav from '../../../components/Usernav'
function Userhome() {
  const navigate=useNavigate();

  // const [data,setData]=useState([ ]);
  const{userContacts}=useContext(Logincontext);
  const [category,setCategory]=useState([ ])
  const [item,setItem]=useState("")
  const [data,setData]=useState([])
  const userid=""
  const [quantity,setQuantity]=useState(" ")
  const [open, setOpen] = React.useState(false);
  const [temp, setTemp]=useState([]
    // {  _id:" ",
    // category_id:" ",
    // productName:" ",
    // price:" ",
    // image:" ",
    // instock:" "
// }
)
  const handleClickOpen = (id) => {
    setOpen(true);
    console.log(id);
    axios.get(`http://localhost:5000/singleitem/${id}`).then((response)=>{
      console.log("singledata"+JSON.stringify(response.data.data));
      setTemp(...response.data.data)
      console.log("singledata state"+JSON.stringify(temp))
    })
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    // userid=userContacts
    // console.log(userid);
const tokenValue=localStorage.getItem("localtoken");
// console.log("tokenValue"+tokenValue)
    axios.get("http://localhost:5000/userhome",{headers: {"Authorization":`Bearer ${tokenValue}`}}
     
    ).then(resp=>{
      // console.log("resp"+JSON.stringify(resp))

      setData(resp.data.data)
      console.log(data)
    })
    axios.get("http://localhost:5000/home").then((response)=>{
     console.log(response.data.data);
      setCategory(response.data.data) 
    //  console.log("category itemss"+JSON.stringify(category[0].productName))
     
       })
    },[])
    const addvalue=(e)=>{
      console.log(e.target.value);
     setItem(e.target.value)
     console.log(item);
      }
     
      const addquantity=(e)=>{
        console.log(e.target.value);
        setQuantity(e.target.value)
        
      }
      const addtocart=(id)=>{
        console.log(("inside adaa"+id));
        axios.post(`http://localhost:5000/addcartdata/${id}/${quantity}/${userContacts.id}`).then((response)=>{
          console.log(response);
          
        })
        navigate('/addtocart')
      }
    


    
  return (
    <div>
    
    <div id="mainbg">
      <div id='bg'>
      <Usernav/>
        <br/>
<br/>        <Row>
          <Col></Col>
          <Col>
          <h1 style={{color:'white',fontSize:101}}>FOODEE</h1>
          <h1 style={{color:'white'}}>Explore the best foodss</h1>
          <br/>
           <Paper
      component="form"
      sx={{ p: '6px 10px', display: 'flex', alignItems: 'center', width: 600  }}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Foods"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={addvalue} value={item} name="name"
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <Search />
      </IconButton>
     
    </Paper></Col>
          <Col></Col>
        </Row>
      </div>
    </div>
    <h2>welcome {userContacts.name}</h2>
    <Row xs={1} md={2} className="g-4">
    
    {
    category.filter((filterdata)=>{
      if(filterdata.productName.toLowerCase().includes(item.toLowerCase())){
        return filterdata
      }
    }).map((u)=>(
                <Card  id="cd" >
                <Card.Img variant="top" style={{width:"450px",height:"450px"}} src={`./upload/${u.image}`} />
                <Card.Body>
                  <Card.Title>{u.productName}      <span>${u.price}</span></Card.Title>
               
      <Button variant="secondary" onClick={()=>{console.log("add"+u._id);handleClickOpen(u._id)}} >
       ADD
      </Button>

      <Modal show={open} onHide={handleClose} >
        <Modal.Header>
        <Modal.Title>Enter the Quantity</Modal.Title>  
          </Modal.Header>
        <Modal.Body>
         
         <h2> {temp.productName}</h2>
         <h4>Rs.{temp.price}</h4>
        
          <TextField
            
            margin="dense"
            id="name"
            label="Quantity"
            type="number"
            fullWidth
            variant="standard"
            onChange={addquantity} name='quantity' value={quantity} required
          />
        </Modal.Body>
        <Modal.Footer>
     
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit'  onClick={()=>{console.log("add to cart"+temp._id);addtocart(temp._id)}}> ADD TO CART</Button>
    
        </Modal.Footer>
      </Modal>
                </Card.Body>
              </Card>
    ))}
   
</Row>
    </div>
  )
}

export default Userhome