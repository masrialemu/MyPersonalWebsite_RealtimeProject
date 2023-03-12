import React, { useState } from 'react'
import './Contact.css'

import {AiFillFacebook,AiFillGithub,AiOutlineTwitter,AiFillLinkedin, AiOutlineInstagram,AiOutlineUser,AiOutlineRight,AiOutlineLeft } from "react-icons/ai"
import {FaTelegram} from "react-icons/fa"
function Contact() {
    const [hide,show]=useState(true)
  const Action=()=>{
    show(true)
  }
  return (
    <div className='contact' id='contact'>
      <div className="contacts">
      <span>Contact Us</span>
      <h3>who i'm</h3>
      <div className="contactt">
      <div className="Contact">
  <div className="Share">
  <div className="share">
          <div>
          <h1><AiFillLinkedin/></h1>
          <h1><AiFillGithub/></h1>
          </div>
          <div>
          <h1><AiFillFacebook/></h1>
          <h1><FaTelegram/></h1>
          </div>
          <div>
          <h1><AiOutlineTwitter/></h1>
          <h1><AiOutlineInstagram/></h1>
          </div>
        </div>
  </div>
         
        <div className="box">
           <form onSubmit={Action}>
          {!hide && <div className="cm">{hide ? <p>The Email is Successfully Sent</p>:<p style={{backgroundColor:"red",color:"black"}}>The Email is Failed</p>}</div>}
           <input type="email" name="email" className='email' placeholder='Please, Enter Your Email' />
           <input type="Title" name="title" className='email' placeholder='Please, Enter Your Title' />
           <textarea name="desc" placeholder='Please, Enter Your Description' ></textarea>
           <div className="Btn">
           <input type="submit"  value="Send" className='btn' />
           </div>
           </form>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
