import React from 'react'
import './Expriance.css'
function Expriance({e}) {
  return (
    <div>
    <div className='exp' id='exp'>
    <div className="exps">
    <span>My Skill</span>
    <h3>who i'm</h3>
    <div className="Exps">
      <div>
      <div className='f1'>
      <h2>{e.skill.html}</h2>
      <div className="html">
        <div className="inh" style={{width:`${e.skill.nhtml}%`}}></div>
      </div>
      </div>
      <div className='f1'>
      <h2>{e.skill.css}</h2>
      <div className="html">
      <div className="ins" style={{width:`${e.skill.ncss}%`}}></div>
      </div>
      </div>
      <div className='f1'>
      <h2>{e.skill.js}</h2>
      <div className="html">
      <div className="inj" style={{width:`${e.skill.njs}%`}}></div>
      </div>
      </div>
      <div className='f1'>
      <h2>{e.skill.react}</h2>
      <div className="html">
      <div className="inr" style={{width:`${e.skill.nreact}%`}}></div>
      </div>
      </div>
      <div className='f1'>
      <h2>{e.skill.boot}</h2>
      <div className="html">
      <div className="inb" style={{width:`${e.skill.nboot}%`}}></div>
      </div>
      </div>
     
      <div className='f1'>
      <h2>{e.skill.reactn}</h2>
      <div className="html">
      <div className="inrn" style={{width:`${e.skill.nreactn}%`}}></div>
      </div>
      </div>
      </div>

      <div>
      <div className='f1'>
      <h2>{e.skill.node}</h2>
      <div className="html">
      <div className="inn" style={{width:`${e.skill.nnode}%`}}></div>
      </div>
      </div>
      <div className='f1'>
      <h2>{e.skill.cpp}</h2>
      <div className="html">
      <div className="incc" style={{width:`${e.skill.ncpp}%`}}></div>
      </div>
      </div>
      <div className='f1'>
      <h2>{e.skill.mongo}</h2>
      <div className="html">
      <div className="inm" style={{width:`${e.skill.nmongo}%`}}></div>
      </div>
      </div>
      <div className='f1'>
      <h2>{e.skill.fb}</h2>
      <div className="html">
      <div className="inf" style={{width:`${e.skill.nfb}%`}}></div>
      </div>
      </div>
      <div className='f1'>
      <h2>{e.skill.php}</h2>
      <div className="html">
      <div className="inp" style={{width:`${e.skill.nphp}%`}}></div>
      </div>
      </div>
      <div className='f1'>
      <h2>{e.skill.java}</h2>
      <div className="html">
      <div className="injv" style={{width:`${e.skill.njava}%`}}></div>
      </div>
      </div>
      </div>
    </div>
    </div>
 </div>
    </div>
  )
}

export default Expriance
