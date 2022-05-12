import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';
import Usernav from '../../components/Usernav';
import { Container,Row,Col } from 'react-bootstrap';
import {Card,CardMedia,CardContent,Typography,CardActions,Box} from '@mui/material'
// import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
function Ratingpage() {
 
const [reviews,setReviews]=useState("")
const [rate,setRate]=useState("")
const giveRate=(p_id)=>{
  console.log(p_id);
axios.post(`http://localhost:5000/rating/${localStorage.getItem("userid")}/${p_id}/${rate}/${reviews}`)
.then(response=>{

})
}
const handleRating=(rate)=>{
 setRate(rate)
}
const handleInputChange=(e)=>{
  console.log(e.target.value);
  setReviews(e.target.value)
  console.log(reviews);
}
  // console.log(rating);
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
    axios.post(`http://localhost:5000/getCartData/${localStorage.getItem("userid")}`).then((response) => {
      setItem(response.data.data)
      // console.log("cart dataaa"+JSON.stringify(item))

      setItemFilter(item.filter((filterdata) => {
        return filterdata.user_id.includes(localStorage.getItem("userid"))
      }))
      // console.log("1sy map" + JSON.stringify(itemFilter));

    })
  })
  
 
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
  
  {data.productdetails.map((product) => (
     <Card sx={{ display: 'flex',marginBlock:5,height:"250px" }}>
     <Box sx={{ display: 'flex', flexDirection: 'column', width:"25%" }}>
      
       <CardMedia
        component="img"
        height="200"
        width="250"
        image={`./upload/${product.image}`}
        alt="green iguana"
      />
       
     </Box>
     <Box sx={{ display: 'flex', alignItems: 'center',width:"70%" }}>

     <CardContent sx={{ flex: '1 0 auto' }}> 
        <Typography gutterBottom variant="h5" component="div">
        {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Price: {product.price}<br/>
<Rating onClick={handleRating} name="rate"  showTooltip 
size={25} allowHalfIcon={false}/>
<br/>
        <textarea style={{marginTop:"10px"}} className="reviewTextBox" maxLength="250" placeholder="Write a review..." onChange={handleInputChange}
         name="review" value={reviews}></textarea>
         <br/><br/>
<Button variant="secondary" type="submit" size="lg" onClick={()=>{console.log("add"+product._id);giveRate(product._id)}} >
    Submit
  </Button>
        </Typography>
      </CardContent>
      </Box>
   </Card>
  ))
}
</Row>

)
}
)  }
  
</Col>
 </Container>
        </div> </div>
     
    </>
  
  )
}

export default Ratingpage