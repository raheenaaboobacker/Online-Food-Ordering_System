import React,{useContext, useState} from "react";
import {Form,Button,Container,Row,Col} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import {TextField} from '@mui/material'
import {Logincontext} from "../../../context/Logincontext"
import './login.css'
function Login() {
  const navigate=useNavigate();
  const{setUserContacts}=useContext(Logincontext);

    // const data1=JSON.stringify(validdata)
    // // const [data,setData]=useState({
    // //     name:'',
    // //     password:''

    // // });
    // // setData([...data,{...data1}])   
    // console.log("first"+data1[0].name);
    // useEffect(()=>{
    //     // const localdata=JSON.parse(window.localStorage.getItem("contactslocal"));
    //     // console.log("bfvhgfv");
    //   //  console.log("dfhghvfg"+JSON.stringify(localdata));
    //   },[])

    const [contacts,setContacts]=useState({
        name:'',
        password:''

    });
    const homeRender=(e)=>{
      e.preventDefault()
      navigate('/register')
    }
    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setContacts({
            ...contacts,
            [name]:value
        })
       
    }
    const validation=(e)=>{
        e.preventDefault();
        console.log("login data"+JSON.stringify(contacts)) ;
        axios.post("http://localhost:5000/login",contacts).then(response => {
         console.log("response data"+JSON.stringify(response.data.data)) ;
       if(response.data.data==="user not found")
        {
            alert("user not found");
            navigate('/register')
        }else if(response.data.data==="true"){
          // console.log(response.data.data) ;
          localStorage.setItem("localtoken",response.data.token)
          setUserContacts({name:response.data.username,
            id:response.data.userid
          })
          console.log("context data"+response.data.username);
          navigate('/userhome')
        }else if(response.data.data==="password not found")
        {
            alert("password not found");
            navigate('/register')
        }
       })
       
    


    }
    return (
      <div className="App">
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}>
              <div id="logindiv"><h2>Login</h2>
          <form className='container' onSubmit={validation}>
  <Form.Group className="mb-3" controlId="formBasic">
   
    <TextField fullWidth  id="outlined-basic" label="Name" variant="outlined" name='name' onChange={handleInputChange} value={contacts.name} required/>
   
  </Form.Group>
 
  <Form.Group className="mb-3" controlId="formBasic">
  <TextField fullWidth  id="outlined-password-input" label="Password" type="password" autoComplete="current-password"
  name='password' onChange={handleInputChange} value={contacts.password} required  />
   
  </Form.Group>
  <div className="d-grid gap-2">
  
  <Button variant="secondary" type="submit" size="lg" >
    Submit
  </Button>
  <Button variant="secondary" type="submit" onClick={homeRender} size="lg"  >
    register
  </Button>
  </div>
</form>

  </div></Col>
            <Col></Col>
          </Row>
        </Container>
        
       

    
      </div>
    );
  }
  
  export default Login;