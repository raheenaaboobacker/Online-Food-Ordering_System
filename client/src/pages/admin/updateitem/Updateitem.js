import axios from 'axios';
import React, { useState,useEffect } from 'react'
import {Container,Row,Col,Button} from "react-bootstrap"
import { useParams,useNavigate } from 'react-router-dom';
import Adminnav from '../../../components/Adminnav';

function Updateitem() {
    const navigate=useNavigate()
    const [file,setFile]=useState(" ")
    const [item,setItem]=useState({
       
        _id:" ",
        category_id:" ",
        productName:" ",
        price:" ",
        image:" ",
        instock:" "
    })
    const {id}=useParams();
   
    useEffect(() =>{
        console.log(JSON.stringify(id))
        axios.get(`http://localhost:5000/admin/findUpdateId/${id}`)      
          .then((response)=>{
              console.log("data update: "+JSON.stringify(response.data.data))
              setItem(...response.data.data)
        //    setItem({
            
        //     productName:response.data.data.productName,
        //     price:response.data.data.price,
        //     instock:response.data.data.instock,
        //     image:response.data.data.image

        //    })
           console.log("to update state :  "+JSON.stringify(item));
        })
    }, [])
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setItem({
            ...item,
            [name]:value
        })
        
    }
    const addCategory=(e)=>{
        e.preventDefault()
        if(file){
            const datas=new FormData();
            const filename=file.name
            datas.append("name",filename)
            datas.append("file",file)
            axios.post("http://localhost:5000/admin/upload",datas)
            .then((response)=>{
                console.log(response)
            })
        }
      
        axios.post("http://localhost:5000/admin/updateitem",item)
        .then((resp)=>{
            console.log(resp.data.data);
           navigate("/adminhome")
        })

    }
    
  return (
    <div> 
        <Adminnav/>
         <Container>
            
    <Row>
      <Col></Col>
      <Col xs={10}>   <form onSubmit={addCategory} encType="multipart/formdata">
  <div className="form-group">
          <label htmlFor="formGroupExampleInput"></label>name
          <input type="text" className="form-control" id="formGroupExampleInput"
           name="productName" placeholder='name' value={item.productName} onChange={handleInputChange} required />
      </div>
      <div className="form-group ">
          <label htmlFor="formGroupExampleInput2 ">Price</label>
          <input type="text " className="form-control " id="formGroupExampleInput2 " 
           placeholder="price" name="price" value={item.price} onChange={handleInputChange} required/>
      </div>
      <div className="form-group ">
          <label htmlFor="formGroupExampleInput3 ">Instock</label>
          <input type="text " className="form-control " id="formGroupExampleInput3"
            placeholder="instock" name="instock" value={item.instock} onChange={handleInputChange} required/>
      </div>
  <img style={{width:"200px",height:"200px",paddingTop:"15px"}} src={`../upload/${item.image}`}/>
      <div className="d-flex justify-content-center">
          <div className="btn btn-mdb-color btn-rounded float-left">
              <span>Choose file</span>
              <input type="file" name="image" onChange={(e)=>{setFile(e.target.files[0]); setItem({...item,image:e.target.files[0].name})}} required   />
          </div>
      </div><br/>
      <Button variant="success" type="submit" >
     Update
    </Button>  
  </form></Col>
      <Col></Col>
    </Row>
    </Container>
       </div>
  )
}

export default Updateitem