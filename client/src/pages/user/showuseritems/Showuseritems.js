import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Homenav from '../../../components/Homenav'
import Usernav from '../../../components/Usernav'

function Showuseritems() {
  const {id}=useParams()
  const [data,setData]=useState([])
      useEffect(() => {
        console.log(id);
     axios.get(`http://localhost:5000/showitems/${id}`)
     .then((response)=>{
         console.log(response)
         setData(response.data.data) 

         console.log(("item"+JSON.stringify(data)));
     })
     
    }, [])
    
  return (
    <div id="mainbg" style={{ height: "100px" }}>
    <div id='bg'>
      <Usernav />
      </div>
    </div>
  )
}

export default Showuseritems