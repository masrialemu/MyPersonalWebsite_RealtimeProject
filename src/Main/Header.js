import Navbar from '../Component/Header/Navbar'
import BG from '../Component/Header/Bg'


function Header({e}) {
  console.log(e)
  return (
    <div>
     <Navbar/>
      <BG e={e} />
    </div>
  )
}

export default Header
