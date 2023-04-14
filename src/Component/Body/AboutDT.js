import React, { useState } from 'react'
import { AiFillCaretDown,AiFillCaretUp,AiOutlineRight } from "react-icons/ai";
import './AboutDT.css'
function AboutDT({e}) {
  const [hide,show]=useState(false)

  const Shows=()=>{
    show(sh=>!sh)
  }
  return (
    
    <div className='Dt'>
    <div className="list">
    <div className="lists">
    <div className='ff'>
    <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> My Name:</span>{e.about_nm.anm1}</span>
    <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> My Skill:</span> {e.about_nm.anm2}</span>
    <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> City:</span>{e.about_nm.anm3}</span>
    <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> Freelance:</span> {e.about_nm.anm4}</span>
    
    </div>
    <div className='ss' >
    <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> Phone:</span>{e.about_nm.anm5}</span>
    <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> Email:</span> {e.about_nm.anm6}</span>
    <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> Telegram:</span> {e.about_nm.anm7}</span>
    <span className='nn'><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> WhatsApp:</span> {e.about_nm.anm8}</span>


    </div>
    </div>    
    </div>
    </div>
  )
}

export default AboutDT
