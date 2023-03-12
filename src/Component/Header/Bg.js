import React, { useEffect, useState } from 'react'
import IMG1 from '../../Img/andras-vas-Bd7gNnWJBkU-unsplash.jpg'
import IMG2 from '../../Img/daniel-korpai-HyTwtsk8XqA-unsplash.jpg'
import IMG3 from '../../Img/steven-binotto-V3Q5Ens9vh0-unsplash.jpg'
import IMG4 from '../../Img/walling-nMqqEFhInkY-unsplash.jpg'
import IMG5 from '../../Img/altumcode-U0tBTn8UR8I-unsplash.jpg'
import IMG6 from '../../Img/best.jpg'
import { AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import './Bg.css'
import Data from '../../Data/List'

function Bg({n1,n2,n3,n4}) {

const [use,setUse]=useState(Data)
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
const Background={backgroundImage:`url(${use[num].img})`  }
  return (
    <div className='BG' id='home'>
     <div className="BGS" >
     <div className="bg" style={Background}>
        <div className="bgs">
        <div className="left">
          <button onClick={Left}><h1><AiOutlineLeft/></h1></button>
        </div>
        <div className="center">
        <div className="title">
      <h3>{n1}</h3>
      <h1><span><span style={{color:"white"}}></span>{n2}</span></h1>  
      <h3>{n3}</h3>
      <span className='sp'><h3 style={{color:'white'}}>{n4}</h3></span>
      <div className="let">
      <button>let's Contact</button>
      </div>
      </div>
        </div>
        <div className="right">
        <button onClick={Right}><h1><AiOutlineRight/></h1></button>
        </div>
        </div>
      </div>

      
     </div>
    </div>
  )
}

export default Bg
