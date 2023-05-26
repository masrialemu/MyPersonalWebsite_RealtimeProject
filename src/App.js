import React from 'react'
import Header from './Main/Header'
import Body from './Main/Body'
import Footer from './Main/Footer'
import {Switch,Route} from 'react-router-dom'
import './App.css'
import Dash from './Main/Dash'
import Login from './Main/Login'
import Home from './Main/Home'

function App() {
  return (
   
     <Route path={'/'} exact><Home/></Route>
    
   
  )
}

export default App
