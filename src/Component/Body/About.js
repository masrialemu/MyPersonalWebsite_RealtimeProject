import Masri from '../../Img/Masri.png'
import React, { useEffect, useState } from 'react'
import './About.css'
function About({e}) {
  const [more,setMore]=useState(false)
  const [Btn,setBtn]=useState(false)
  const [size,setSize]=useState(window.innerWidth)

  // useEffect(()=>{
  //   window.addEventListener('resize',()=>{
  //    setSize(window.innerWidth)
  //   })
  //   if(size<600){
  //     setMore(true)
  //    }
  //    else{
  //     setMore(false)
  //    }
  // },[])
  const SeeMore=()=>{
    setBtn(p=>!p)
  }
  const Text={
    WebkitLineClamp:Btn ? `${100}`:`${10}`
  }

  return (
    <div className='About' id='about'>
      <div className="about">
      <span>About Me</span>
      <h3>who i'm</h3>
        <div className="abouts">
         <div className="list">
         <div className="imgs">
         <img src={e.about.aurl} alt="image"  />
         </div>
         <div className="det">
         <div className="Text">
         <div className="text" >
          <p style={Text}>{e.about.def}
          </p> 
         </div>
         <div className="mr">
         {
          !Btn ?<input type="button" value="More" onClick={SeeMore} />
          :<input type="button" value="Hide" onClick={SeeMore} />
         }
        </div>
         <div className="btn">
         <button className='dtt'>Download CV</button>
      <a href="#contact"><button>Let's Contact</button></a>
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
