import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Detail.css'
import { AiFillDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';
function Detail() {
  const Location = useLocation()
  const id=Location.pathname.split('/')[2]
  const [project, setProject] = useState({});
  const [projects, setProjects] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData ? userData.token : null;
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('/related/project');
            setProjects(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    fetchData(); // Call the async function to fetch data
}, []); // Empty dependency array, meaning it will run once when the component mounts


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/get/project/${id}`);
        setProject(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [id]);
  
  const handleDelete = (id) => {


    // Make an HTTP DELETE request to delete the item
    axios.delete('/delete/project', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log('Item deleted successfully');
      })
      .catch((error) => {
        // Handle the error here
        console.error('Error deleting item', error);
      });
  };
  return (
    <div>
      <main className="bodyyc">
        <div className="detail">
          <div className="detailsi">
              <div className="details" key={project._id} encType="multipart/form-data">
              <div className="allbtns">
                <img src={project.image} alt="image" id="imagebox" />
                <div className="btn">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <button className='git'>GitHub</button>
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <button className='live'>Live</button>
                </a>
              
               {
                token ?  <AiFillDelete className='byy' onClick={()=>handleDelete(project._id)} />
            :null
               }
              </div>
                <div className="desc">
                <div className="vx">
                <p className="boxp">{project.title}</p>
                <div className="descl">
                  <span className="time">{new Date(project.createdAt).getFullYear()}
                  </span>
                </div>
                </div>
                    <p className="descx" id="descx">
                      {project.desc}
                    </p>
                  
                </div>
              </div>
            </div>
          
          </div>
          <div className="right">
            <div className="rel">
              <span className="most">OTHER PROJECT</span>
              <div className="lines"></div>
            </div>
            <div className="rightt">
               {projects.map((project) => (
                 <Link to={`/project/${project._id}`}>
                 <div className="rights" key={project._id}>
                 <a href='detail/1'>
                   <img src={project.image} alt={project.title} />
                 </a>
                 <span className="tite">{project.title}</span>
               </div>
                 </Link>
  
               ))
               }
             
              </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Detail;
