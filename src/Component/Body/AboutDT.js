import React, { useState,useEffect } from 'react'
import {AiOutlineRight } from "react-icons/ai";
import './AboutDT.css'
import axios from 'axios';
import { AiFillDelete} from "react-icons/ai";
import { useUser } from '../../Context/Context';

function AboutDT() {
  const {handleDelete } = useUser();
  const [skills, setSkills] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData ? userData.token : null;
  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const response = await axios.get('/get/info'); // Replace with your server URL
        setSkills(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, []);



  return (
    
    <div className='Dt'>
    <div className="list">
    <div className="lists">
    <div className='ff'>
    {skills.map((skill) => (
    <span className='nn' key={skill._id}><span className='nm'><AiOutlineRight style={{margin:'3px'}} /> {skill.name}:</span> {skill.value}
   {
    token ? <AiFillDelete
    className='byy'
    onClick={() => handleDelete(()=>skills._id)} // Pass the ID to the handler
  />:null
   }

</span>    
    ))}
    </div>
    </div>    
    </div>
    </div>
  )
}

export default AboutDT
