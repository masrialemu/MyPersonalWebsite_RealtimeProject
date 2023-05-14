import React,{useState} from 'react'
import './Service.css'
import { AiOutlineUser,AiOutlineRight,AiOutlineLeft } from "react-icons/ai";
import { DiCodeigniter} from "react-icons/di";

import List from '../../Data/Ser'
function Service() {
  const [state, setstate] = useState(0)
  const Left=()=>{
    if(state<=0){
      setstate(3)
    }
    else{
      setstate(state-1)
    }
  }
  const Right=()=>{
    if(state>=3){
      setstate(0)
    }
    else{
      setstate(state+1)
    }
   
  }
  const style={
    right: `${state*307}px`
  }
  return (
    <div className='service' id='service'>
      <div className="services">
      <span>My Service</span>
      <h3>who i'm</h3>
      <div className="Serr">
      <div className="Ser">
      <h1 className="bt"><AiOutlineLeft onClick={Left}/></h1>
   <div className="main">
     <div className="Services">
     
    {
        List.map((e)=> <div className="Lss" key={e.id}>
      <div className="lss" style={style}>
      <h1><DiCodeigniter/></h1>   
      <h3>{e.title}</h3>
         <p>
         {e.desc}
         </p>
        
        </div>
     </div>)
    }
    

     </div>
     </div>
     <h1 className='bt'><AiOutlineRight onClick={Right} /></h1>

      </div>

      </div>
           </div>
           </div>
  )
}

export default Service