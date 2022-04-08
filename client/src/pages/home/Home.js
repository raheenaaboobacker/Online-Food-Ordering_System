import {React,useEffect,useState} from 'react'
import './home.css'
import {Row,Col,Card,Stack,Button, Form} from 'react-bootstrap'
import {IconButton ,Paper,InputBase} from '@mui/material'
import {Search,Menu} from "@mui/icons-material"
import axios from "axios"
import {Link} from "react-router-dom"
import Homenav from '../../components/Homenav'
function Home() {
  // const [data,setData]=useState([ ]);
 
  const [category,setCategory]=useState([ ])
  const [item,setItem]=useState("")
  const [data,setData]=useState([])
  useEffect(()=>{
// const tokenValue=localStorage.getItem("localtoken");
// console.log("tokenValue"+tokenValue)
//     axios.get("http://localhost:5000/home",{headers: {"Authorization":`Bearer ${tokenValue}`}}
     
//     ).then(resp=>{
//       setData(resp.data.data)
//       console.log(data)
//     })
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
    
    
      // useEffect(() => {
      //   const filtdata=category.filter(category => category.includes(item.name))
      //   console.log("filtdataaa"+JSON.stringify(filtdata))
      //   // setData(filtdata)
      //   // console.log("dataaa"+data);
      // }, [])
      


    
  return (
    <div>
    
    <div id="mainbg">
      <div id='bg'>
      <Homenav/>
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
                  <Card.Title>{u.productName}</Card.Title>
                 
                  
                </Card.Body>
              </Card>
    ))}
   
</Row>
    </div>
  )
}

export default Home