import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Adminnav from '../../../components/Adminnav'
import {Container,Row,Col,Button} from "react-bootstrap"

function AddCategory() {
    const navigate=useNavigate()
    const [file,setFile]=useState(" ")
    const [data,setData]=useState({
        categoryName:" ",
        image:" "
    })
   
    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setData({
            ...data,
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
        axios.post("http://localhost:5000/admin/addcategory",data)
        .then((resp)=>{
            console.log(resp.data.data);
            navigate('/additem')
        })

    }
    
  return (
    <div>

       

        <Adminnav/>  
        <Container>
  <Row>
    <Col></Col>
    <Col xs={10}>   <form>
    <div className="form-group">
        <label htmlFor="formGroupExampleInput">Category Name</label>
        <input type="text" className="form-control" id="formGroupExampleInput" onChange={handleInputChange} value={data.categoryName} name="categoryName" placeholder='Enter category' required/>
    </div>
    
    <div className="d-flex justify-content-center">
        <div className="btn btn-mdb-color btn-rounded float-left">
            <span>Choose file</span>
            <input type="file" name="image" required  onChange={(e)=>{setFile(e.target.files[0]); setData({...data,image:e.target.files[0].name})}} />
        </div>
    </div><br/>
    <Button variant="success" type="submit" onClick={addCategory}>
   ADD
  </Button>  
</form></Col>
    <Col></Col>
  </Row>
  </Container>








     
        </div>
  )
}

export default AddCategory