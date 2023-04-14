import Navbar from '../Component/Header/Navbar'
import BG from '../Component/Header/Bg'
import React from 'react';


function Header({e}) {
  return (
    <div>
     <Navbar/>
      <BG e={e} />
    </div>
  )
}

export default Header
