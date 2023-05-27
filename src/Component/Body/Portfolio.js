import React, { useEffect, useState } from 'react';
import IMG from '../../Img/best.jpg';
import './Portfolio.css';
import Data from '../../Data/List';
import axios from 'axios';

function Portfolio() {
  const [port, setPort] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://back-end1.onrender.com/portfolio/get');
        setPort(res.data);

      } catch (error) {
 
      }
    };

    fetchData();
  }, [port]); // Pass an empty dependency array to run the effect only once

  return (
    <div className="portos">
      <div className='port' >
        <div className="ports">
          <span>Portfolio</span>
          <h3>who I am</h3>
          <div className="Ports">
            {port.map((e) => (
              <div className="lport" key={e.id}>
                <img src={e.url} alt="image" />
                <div className="dit">
                  <div className="time">{new Date().getFullYear()}</div>
                  <div className="title">{e.name}</div>
                </div>
                <div className="btn">
                  <a href={e.git} target="_blank" rel="noopener noreferrer">
                    <button className='git'>GitHub</button>
                  </a>
                  <a href={e.live} target="_blank" rel="noopener noreferrer">
                    <button className='live'>Live</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
