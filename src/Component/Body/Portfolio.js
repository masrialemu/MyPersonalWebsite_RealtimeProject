import React from 'react'
import IMG from '../../Img/best.jpg'
import './Portfolio.css'
function Portfolio() {
  return (
    <div>
    <div className='port' id='portfolio'>
      <div className="ports">
      <span>My Portfolio</span>
      <h3>who i'm</h3>
      <div className="Ports">
        <div className="lport">
           <img src={IMG} alt="image" />
           <div className="dit">
             <div className="time">12:30:1/22</div>
             <div className="title">Chat App</div>
           </div>
           <div className="btn">
            <button className='git'>GitHub</button>
            <button className='live'>Live</button>
           </div>
           <img src={IMG} alt="image" />
           <div className="dit">
             <div className="time">12:30:1/22</div>
             <div className="title">Chat App</div>
           </div>
           <div className="btn">
            <button className='git'>GitHub</button>
            <button className='live'>Live</button>
           </div>

           <img src={IMG} alt="image" />
           <div className="dit">
             <div className="time">12:30:1/22</div>
             <div className="title">Chat App</div>
           </div>
           <div className="btn">
            <button className='git'>GitHub</button>
            <button className='live'>Live</button>
           </div>
        </div>
     
         <div className="lport">
           <img src={IMG} alt="image" />
           <div className="dit">
             <div className="time">12:30:1/22</div>
             <div className="title">Chat App</div>
           </div>
           <div className="btn">
            <button className='git'>GitHub</button>
            <button className='live'>Live</button>
           </div>

           <img src={IMG} alt="image" />
           <div className="dit">
             <div className="time">12:30:1/22</div>
             <div className="title">Chat App</div>
           </div>
           <div className="btn">
            <button className='git'>GitHub</button>
            <button className='live'>Live</button>
           </div>

           <img src={IMG} alt="image" />
           <div className="dit">
             <div className="time">12:30:1/22</div>
             <div className="title">Chat App</div>
           </div>
           <div className="btn">
            <button className='git'>GitHub</button>
            <button className='live'>Live</button>
           </div>
        </div>

        
      </div>
      </div>
    </div>
    </div>
  )
}

export default Portfolio
