import React from 'react'
import Header from './Main/Header'
import Body from './Main/Body'
import Footer from './Main/Footer'
import {Switch,Route} from 'react-router-dom'
import Dash from './Main/Dash'
import Login from './Main/Login'
import Home from './Main/Home'
import NotFound from './Main/NotFound'
function App() {
  return (
    <Switch>
     <Route path={'/'} exact><Home/></Route>
     <Route path="*" element={<NotFound />} />
    </Switch>
  )
}

export default App
