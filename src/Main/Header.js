import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Header/Navbar'
import BG from '../Component/Header/Bg'
import axios from 'axios'

function Header() {
  const [bg,setBg]=useState([])
  useEffect(()=>{
    const Fh = async()=>{
      const res= await axios.get('http://localhost:5000/get');
      setBg(res.data)
      console.log(res.data)
    }
    Fh()
  },[])
  
  return (
    <div>
     <Navbar/>
     {bg.map((e)=><BG n1={e.n1} n2={e.n2} n3={e.n3} n4={e.n4} id={e.id} />)}
    </div>
  )
}

export default Header
