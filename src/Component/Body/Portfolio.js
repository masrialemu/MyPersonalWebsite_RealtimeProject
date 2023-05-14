import React, { useEffect, useState } from 'react'
import IMG from '../../Img/best.jpg'
import './Portfolio.css'
import Data from '../../Data/List'
import axios from 'axios'
function Portfolio() {
  
  const [port,setPort]=useState([])
    useEffect(()=>{
    const Fetch=async()=>{
      const res= await axios.get('https://back-end1.onrender.com/portfolio/get')
      setPort(res.data)
      console.log(res.data)
    }
    Fetch()
    })
   
  return (
    <div>
    <div className='port' id='portfolio'>
      <div className="ports">
      <span>My Portfolio</span>
      <h3>who i'm</h3>
      <div className="Ports">
     {port.map((e)=><div className="lport">
           
     <img src={e.url} alt="image" />
     <div className="dit">
       <div className="time">12:30:1/22</div>
       <div className="title">{e.name}</div>
     </div>
     <div className="btn">
      <a href="http:///www.google.com" target="_blank" rel="noopener noreferrer"><button className='git'>GitHub</button></a>
      <a href="http://www.google.com" target="_blank" rel="noopener noreferrer"><button className='live'>Live</button></a>
     </div>
    
</div>)}
      </div>
      </div>
    </div>
    </div>
  )
}

export default Portfolio
