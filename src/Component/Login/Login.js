import React from 'react'
import './Login.css'
import { DiCodeigniter} from "react-icons/di";

function Login() {
  return (
    <div className='login'>
       <div className="logins">
    <div className="Logg">
    <h1 className='hh'><DiCodeigniter/></h1>
    <h1>My Personal Website</h1>
    <h3>Masresha Alemu</h3>
    <div className="ln">
    <div className="ll"></div>
    </div>
    <div className="log">
       <div className="logs">
       <input type="email" name="email" placeholder='enter email address' />
       <input type="password" name="password" placeholder='enter passcode' />
       <button><p>Login</p></button>  
       <h4>Forget Passcode</h4> 
       </div>
    </div>
    </div>
       </div>
    </div>
  )
}

export default Login
