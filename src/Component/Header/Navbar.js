import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { AiOutlineUserAdd,AiOutlineLogout,AiOutlineClose } from "react-icons/ai";
import {Link} from 'react-router-dom'
function Navbar() {
const [hide,setHide]=useState(true)
const [hideX,setHideX]=useState(true)
const [scroll,setScroll]=useState(false)
const [size,setSize]=useState(window.innerWidth)
const Show=()=>{
  setHide(p=>!p)
}

useEffect(()=>{
  window.addEventListener('scroll',()=>{
   if(window.scrollY>100){
      setScroll(true)
   }
   else{
     setScroll(false)
   }
  })
})

useEffect(()=>{
  window.addEventListener('resize',()=>{
   setSize(window.innerWidth)
  })
  if(size<=600){
    setHide(true)
    
   }
   else if(600>size){
   
    setHide(false)
   }
},[size])

const List={
    height:hide&&`${0}px`,
    transition: `${0.5}s`
}
const Navbar={
  height:!hide ? `${333}px`:`${85}px`,
  position: scroll && "fixed",
  transition: `${1}s`
}
 const li=document.querySelectorAll('link')
 const sec= document.querySelectorAll('a')

 const active=()=>{
  let len=sec.length;
  while(--len && window.screenY+97 <sec[len].offsetTop){}
  li.forEach(ltx=>ltx.classList.remove('active'));
  li[len].classList.add('active');
 }
 

  return (
<div className='NAV' style={Navbar} >
<div className="Navbar" style={Navbar}>
    <div className='navbar'>
      <div className="navbars" >
        <div className="list" >
        <h3><a href="#home" className='link'>Home</a></h3>
        <h3><a href="#about" className='link'>About</a></h3>
        <h3><a href="#exp" className='link'>Expriance</a></h3>
        <h3><a href="#portfolio" className='link'>Portfolio</a></h3>
        <h3><a href="#service" className='link'>Service</a></h3>
        <h3><a href="#contact" className='link' >Contact</a></h3>
        </div>
        <div className="btn">
          <div className="">
          <h3 className='lg'><AiOutlineUserAdd/></h3>
          <h3 className='hd' onClick={Show}>{hide ?"=":"x"}</h3>
          </div>        
        </div>
      </div>
    </div>
    </div>
    </div>

  )
}

export default Navbar
