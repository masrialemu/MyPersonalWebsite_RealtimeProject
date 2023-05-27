import React, { useEffect, useRef, useState } from 'react'
import IMG1 from '../../Img/andras-vas-Bd7gNnWJBkU-unsplash.jpg'
import IMG2 from '../../Img/daniel-korpai-HyTwtsk8XqA-unsplash.jpg'
import IMG3 from '../../Img/steven-binotto-V3Q5Ens9vh0-unsplash.jpg'
import IMG4 from '../../Img/walling-nMqqEFhInkY-unsplash.jpg'
import IMG5 from '../../Img/altumcode-U0tBTn8UR8I-unsplash.jpg'
import IMG6 from '../../Img/best.jpg'
import { AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import './Bg.css'
import Data from '../../Data/List'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Bg({e}) {
  const Pic=
  [
    {
     id:1,
     img:{IMG1}
    },
    {
      id:2,
      img:{IMG2}
     },
     {
      id:3,
      img:{IMG3}
     },
     {
      id:4,
      img:{IMG4}
     },


  ]

const [use,setUse]=useState(Pic)
const [num,setNum]=useState(0)


let time

  

useEffect(()=>{
  time=setInterval(()=>{
     if(num>=use.length-1){
       setNum(0)
     }
     else{
       setNum(num+1)
     }
  },10000)

  return ()=>clearInterval(time)
})

const Left=()=>{
 if(num<=0){
  setNum(use.length-1)
 }

  else{
    setNum(num-1)
  }
}
const Right=()=>{
  if(num>=use.length-1){
    setNum(0)  
  }
  else{
    setNum(num+1)
  }
}

// const Background={backgroundImage:`url(${use[num].img})`
const Background={backgroundImage:`url(${IMG6})`  }
  return (
    <div className='BG' id='home'>
     <div className="BGS" >
     <div className="bg" style={Background}>
        <div className="bgs">
        <div className="left">
          <button onClick={Left}><h1 style={{display:'none'}}><AiOutlineLeft/></h1></button>
        </div>
        <div className="center">
        <div className="title">
      <h3>{e.name.n1}</h3>
      <h1><span><span style={{color:"white"}}></span>
      <h3 className='ans'>
      <Typewriter
      options={{
        strings: ['html','css','javascript','react.js','node.js','express.js','mongoose','mysqil','php','bootstrap','python','firebase','react-native'],
        autoStart: true,
        loop: true,
        }}
       /> 
      </h3>
      </span></h1>  
      <h3>{e.name.n3}</h3>
      <span className='ans'><h3 style={{color:"white"}}> 
      {e.name.n4}
      <Typewriter
      options={{
        strings: [`.....`],
        autoStart: true,
        loop: true,
        }}
       /> 
      
      </h3></span>
      <div className="let">
      <a href="#contact"><button>let's Contact</button></a>
      </div>
      </div>
        </div>
        <div className="right">
        <button onClick={Right}><h1 style={{display:'none'}} ><AiOutlineRight/></h1></button>
        </div>
        </div>
      </div>

      
     </div>
    </div>
  )
}

export default Bg
