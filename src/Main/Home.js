import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import Loading from '../Component/Load/Loading'
function Home() {
  const [data,setData]=useState([])
  const [load,setLoad]=useState(true)
  useEffect(()=>{
    const Fh = async()=>{
      const res= await axios.get('https://back-end1.onrender.com/get');
      setData(res.data)
      if(res.data){
        setLoad(false)
      }
    }
    Fh()
    
  },[])
  return (
     <div>
     {
      load ? <Loading/>:<div> {data.map((e)=><Header e={e} />)}
      {data.map((e)=><Body e={e} />)}
      {data.map((e)=><Footer e={e} />)}}</div>
     }
     </div>


  )
}

export default Home
