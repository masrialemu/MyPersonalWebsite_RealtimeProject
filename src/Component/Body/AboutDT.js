import React, { useState } from 'react'
import { AiFillCaretDown,AiFillCaretUp,AiOutlineRight } from "react-icons/ai";
import './AboutDT.css'
function AboutDT() {
  const [hide,show]=useState(false)

  const Shows=()=>{
    show(sh=>!sh)
  }
  return (
    
    <div className='Dt'>
    <div className="list">
    <div className="lists">
    <div className='ff'>
    <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> My Name:</span> Masresha Alemu</span>
    <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> My Skill:</span> MERN Stack</span>
    <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> City:</span> Addis Ababa,Ethiopia</span>
    <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> Freelance:</span> Available</span>
    
    </div>
    <div className='ss' >
    <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> Phone:</span> +251979742762</span>
    <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> Email:</span> masrialemu@gmail.com</span>
    <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> Telegram:</span> @Masri404</span>
    <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> WhatsApp:</span> +251979742762</span>


    </div>
    </div>    
    </div>
    </div>
  )
}

export default AboutDT
