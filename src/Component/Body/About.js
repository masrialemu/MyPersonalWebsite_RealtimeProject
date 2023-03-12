import Masri from '../../Img/Masri.png'
import React, { useEffect, useState } from 'react'
import './About.css'
function About() {
  const [more,setMore]=useState(false)
  const [Btn,setBtn]=useState(false)
  const [size,setSize]=useState(window.innerWidth)

  useEffect(()=>{
    window.addEventListener('resize',()=>{
     setSize(window.innerWidth)
    })
    if(size<600){
      setMore(true)
     }
     else{
      setMore(false)
     }
  },[])
  const SeeMore=()=>{
    setBtn(p=>!p)
  }
  const Text={
    // color:"black",
    height:Btn ? `auto`:`${350}px`
  }

  return (
    <div className='About' id='about'>
      <div className="about">
      <span>About Me</span>
      <h3>who i'm</h3>
        <div className="abouts">
         <div className="list">
         <div className="imgs">
         <img src="https://res.cloudinary.com/dnd6iyq7q/image/upload/v1678074745/pic/Masri_jmqxe4.png" alt="image"  />
         </div>
         <div className="det">
         <div className="Text">
         <div className="text" style={Text}>
          <p>I'm a creative Full Stack Web Developer based in Ethiopia. I'm very passionate and dedicated to my work. With few years experience as a professional Full Stack Developer, I have acquired the skills necessary to build great, appealing, and premium websites that meet the latest web standards. Detail-orientated Web Developer adept at interpreting blueprints, working with others, and meeting production deadlines. Skilled at quickly learning new processes, technologies, and machinery. Self-motivated with strong organizational and time management abilities. Most importantly, I'm constantly trying to learn new skills to improve myself and my work
          </p> 
         </div>
       { <div className="mores">
        {<p onClick={SeeMore} className='more'>{!Btn ? "....More":"...Hide"}</p>}
        </div>}

         <div className="btn">
         <button>Download CV</button>
         <button>Let's Contact</button>
         </div>
         </div>
         </div>

         </div>
        </div>
      </div>
    </div>
  )
}

export default About
