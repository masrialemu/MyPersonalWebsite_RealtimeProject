import React, { useEffect, useState } from 'react'
import './Expriance.css'
import { AiFillDelete} from "react-icons/ai";
import axios from 'axios';

function Expriance({e}) {
  const [skills, setSkills] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData ? userData.token : null;
  
  useEffect(() => {
    async function fetchSkills() {
      try {
        const response = await axios.get('https://my-website-back-end.onrender.com/get/skill');
        setSkills(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchSkills();
  }, []); // The empty dependency array ensures this runs once on component mount
 
  const handleDelete2 = (id) => {
    // Make an HTTP DELETE request to delete the item
    axios.delete(`https://my-website-back-end.onrender.com/delete/skill/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log('skill deleted successfully');
      })
      .catch((error) => {
        // Handle the error here
        console.error('Error deleting item', error);
      });
  };

  return (
    <div>
      <div className='exp' id='exp'>
        <div className="exps">
          <span>My Skill</span>
          <h3>who i'm</h3>
  
          <div className="Exps">
            <div className='exlist'>
              {skills.map((skill) => (
                <div className='f1' key={skill._id}>
                  <h2>{skill.name}</h2>
                  <div className="html">
                    <div className="injv" style={{ width: `${skill.value}%` }}></div>
                  </div>
                 {
                  token ?
                  <AiFillDelete onClick={handleDelete2(()=>skill._id)} className='byy' />
                  :null
                 }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
             

}  
export default Expriance
