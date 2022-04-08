import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Homenav from '../../../components/Homenav'

function Showuseritems() {
    const id=useParams()
    const [item,setItem]=useState([ ])
    useEffect(() => {
        console.log(id);
     axios.get(`http://localhost:5000/showuseritems/${id}`)
    //  .then((response)=>{
    //      console.log(response)
    //  })
     
    }, [])
    
  return (
    <div>
        <Homenav/>
    </div>
  )
}

export default Showuseritems