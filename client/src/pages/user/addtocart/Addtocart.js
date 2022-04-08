import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Usernav from '../../../components/Usernav'
import { Logincontext } from '../../../context/Logincontext'
import { Container,Row,Col } from 'react-bootstrap';
import {Card,CardMedia,CardContent,Typography,CardActions,Button} from '@mui/material'

function Addtocart() {
  const { userContacts } = useContext(Logincontext);
  let grandtotal=0
  
  const [item, setItem] = useState(
    {
      _id: " ",
      category_id: " ",
      productName: " ",
      price: " ",
      image: " ",
      instock: " "
    })
  const [itemFilter, setItemFilter] = useState([]);

  useEffect(() => {
    // console.log(userContacts);
    axios.post(`http://localhost:5000/getCartData/${userContacts.id}`).then((response) => {
      setItem(response.data.data)
      // console.log("cart dataaa"+JSON.stringify(item))

      setItemFilter(item.filter((filterdata) => {
        return filterdata.user_id.includes(userContacts.id)
      }))
      // console.log("1sy map" + JSON.stringify(itemFilter));

    })
  })
 const deleteCartItem=(id)=>{
axios.delete(`http://localhost:5000/deleteCartItem/${id}`).then((response)=>{
  console.log(response);
})
 }
  return (
    <>
      {/* <h1>{userContacts.name}</h1> */}
      <div id="mainbg" style={{ height: "100px" }}>
        <div id='bg'>
          <Usernav />
          <Container> 
<Col>
{itemFilter.map((data) =>{return (
  
  

<Row> 
  <label hidden>
{grandtotal=parseInt(parseInt(grandtotal)+parseInt(data.total))}</label>
  {/* {data.product_id} */}
  
  {data.productdetails.map((product) => (
    <Card  style={{ maxWidth: 345,marginTop:50 }}>
       <CardMedia
        component="img"
        height="140"
        // src={`./upload/${u.image}`}
        image={`./upload/${product.image}`}
        alt="green iguana"
      />
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       unit price: {product.price}<br/>
        total:{data.total}
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button type='submit' onClick={()=>{console.log(data._id);deleteCartItem(data._id)}}>
          Remove 
        </Button>
      </CardActions>
  </Card>
  ))
}</Row>

)
}
)  }
<h3>Grand Total:{grandtotal}</h3>
<Button>Payment</Button>
</Col>

          </Container>
        </div> </div>
     
    </>
  
  )
}

export default Addtocart