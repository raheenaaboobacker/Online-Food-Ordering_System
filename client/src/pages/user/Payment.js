import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import {InputLabel,FormControl,Select,MenuItem,TextField,Button} from '@mui/material'
import { Link, useParams } from 'react-router-dom'

function Payment() {
    const {total}=useParams()

  return (
    <div>
        <Container>
            <Row>
            <Col></Col>
        
            <Col xs={7}>
            <div id="logindiv" style={{height:500}} >
                <h1>Payment Details</h1>
                <br/><br/>
                <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label" >Payment type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="type"

  >
    <MenuItem value={10}>Cash on delivery</MenuItem>
    <MenuItem value={20}>online payment</MenuItem>
  </Select>
</FormControl><br/><br/>
<TextField fullWidth  id="outlined-password-input" label="card number" type="number" autoComplete="card number"
  name='cardnumber' /><br/><br/>
  <TextField fullWidth  id="outlined-password-input"  type="date" autoComplete="Date"
  name='date' /><br/><br/>
 <Button variant="contained" fullWidth disabled>
 <h5> Total: {total}</h5>
</Button><br/><br/>
<Link to="/ratingpage"><Button variant="contained" fullWidth >
  <h5>Pay </h5>
</Button></Link>
            </div>

            </Col>
            <Col></Col>
            </Row>
            
        </Container>
    </div>
  )
}

export default Payment