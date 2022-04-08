import React, { useState,useEffect } from 'react'
import {Container,Row,Col,Button} from "react-bootstrap"
import { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'
import Adminnav from '../../../components/Adminnav'
function Additem(props) {
    const navigate=useNavigate()
    const {id}=useParams();
    const [file,setFile]=useState([" "])
    const [item,setItem]=useState({
        category_id:id,
        productName:" ",
        price:" ",
        image:" ",
        instock:" "

    })
    console.log("category id "+item.category_id);
    const addvalue=(e)=>{
const {name,value}=e.target
setItem({
    ...item,
    [name]:value
})
    }
    const addItem=(e)=>{
        e.preventDefault()
        if(file){
            const data=new FormData();
            const filename=file.name
            data.append("name",filename)
            data.append("file",file)
            axios.post("http://localhost:5000/admin/upload",data)
            .then((response)=>{
                console.log(response)
            })
        }
axios.post("http://localhost:5000/admin/additem",item).then((demo)=>{
    console.log(demo.data.data)
    
})
navigate(`/showitems/${id}`)
    }
    // useEffect(() => {
      
    //     axios.post("http://localhost:5000/admin/showcategory").then((response)=>{
    //   console.log(response.data.data);
    //   setCategory(response.data.data) 
    //   console.log("category data"+JSON.stringify(category));
    //     }) 
    //    }, [])
    //    const setDropdownValue=(e)=>{
    //        setCatg=e.target.value
    //        console.log(JSON.stringify(catg));
    //    }
    // const mapout=category.map((data,i)=>{
    //     console.log("maped data"+JSON.stringify(data));
    //     return(
    //         <Dropdown.Item onChange={setDropdownValue} value={data.categoryName}  key={i}>{data.categoryName}</Dropdown.Item>
              
    //     )
    // })
   
  return (
    <div>
        <Adminnav/> 
        {/* <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Category
            </Dropdown.Toggle>
          
            <Dropdown.Menu>
             {mapout}
            </Dropdown.Menu>
          </Dropdown>  */}
        <Container>
            
  <Row>
    <Col></Col>
    <Col xs={10}>  
   
    <form onSubmit={addItem} encType="multipart/formdata">
  
    
    
    <div className="form-group">
        <label htmlFor="formGroupExampleInput">Name</label>
        <input type="text" className="form-control" id="formGroupExampleInput" onChange={addvalue} value={item.name} name="name" placeholder='name' required/>
    </div>
    <div className="form-group ">
        <label htmlFor="formGroupExampleInput2 ">Price</label>
        <input type="text " className="form-control " id="formGroupExampleInput2 " onChange={addvalue} value={item.price} placeholder="price" name="price" required/>
    </div>
    <div className="form-group ">
        <label htmlFor="formGroupExampleInput3 ">Instock</label>
        <input type="text " className="form-control " id="formGroupExampleInput3" onChange={addvalue} value={item.instock} placeholder="instock" name="instock" required/>
    </div>
    {/* <input type="text " onChange={addvalue} value={item.instock} placeholder="price" name="instock" required/> */}

    <div className="d-flex justify-content-center">
        <div className="btn btn-mdb-color btn-rounded float-left">
            <span>Choose file</span>
            <input type="file" name="image" required  onChange={(e)=>{setFile(e.target.files[0]); setItem({...item,image:e.target.files[0].name})}} />
        </div>
    </div><br/>
    <Button variant="success" type="submit" >
   ADD
  </Button>  
</form></Col>
    <Col></Col>
  </Row>
  </Container>
     
</div>
  )
}

export default Additem