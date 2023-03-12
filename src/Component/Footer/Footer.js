import React from 'react'
import {AiFillFacebook,AiFillGithub,AiOutlineTwitter,AiFillLinkedin, AiOutlineInstagram,AiOutlineUser,AiOutlineRight,AiOutlineLeft } from "react-icons/ai"
import {FaTelegram} from "react-icons/fa"
import './Footer.css'
function Footer() {
  return (
    <div>
    <div className='footer'>
        <div className="footers">
        <span>Personal Website </span>
        <h3>My name is Masresha Alemu </h3>
         <div className="Footers">
           <ul>

           <li><a href="#home">home</a></li>
           <li><a href="#about">about</a></li>
           <li><a href="#exp">expriance</a></li>
           <li><a href="#portfolio">portfolio</a></li>
           <li><a href="#service">service</a></li>
           <li><a href="#contact">contact</a></li>
           </ul>
           <div className="line">
           <h1><AiFillLinkedin/></h1>
           <h1><AiFillGithub/></h1>
           <h1><AiFillFacebook/></h1>
           <h1><FaTelegram/></h1>
           <h1><AiOutlineTwitter/></h1>
           <h1><AiOutlineInstagram/></h1>
           </div>
           
           </div>
           <p className="copy">copyright {new Date().getFullYear()}</p>
         </div>
        </div>
    </div>
    
  )
}

export default Footer
