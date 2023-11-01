import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import axios from 'axios';
import { AiFillDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';


function Portfolio() {
  
  const [projects, setProjects] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData ? userData.token : null;
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('https://my-website-back-end.onrender.com/get/project');
            setProjects(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    fetchData(); 
}, []); // Empty dependency array, meaning it will run once when the component mounts

const handleDelete1 = async (id) => {
  try {
    const response = await axios.delete(`https://my-website-back-end.onrender.com/delete/project/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log('project deleted successfully');
    window.location.reload()
  } catch (error) {
    // Handle the error here
    console.error('Error deleting item', error);
  }
};


  return (
    <div className="portos" id='portfolio'>
      <div className='port' >
        <div className="ports">
          <span>Portfolio</span>
          <h3>who I am</h3>
         
          {projects.map((project) => (
            <div className="Ports">
           
              <div className="lport" key={project._id}>
                <div className="imgxx">
                  <img src={project.image} alt="Project" />
                </div>
                <div className="dit">
                  <div className="time">{new Date(project.createdAt).getFullYear()}
                  </div>
                  <div className="title">{project.title}</div>
                </div>
                <div className="btn">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button className='git'>GitHub</button>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <button className='live'>Live</button>
                  </a>
                  <Link to={`/project/${project._id}`}>
                  <button className="live">Detail</button>
                </Link>
       
                 {
                  token ?  <AiFillDelete className='byy'  onClick={()=>handleDelete1(project._id)} />
         :null
                 }
                
                </div>
              </div>
           
          </div>
          ))}

        </div>
      </div>
    </div>

  );
}

export default Portfolio;
