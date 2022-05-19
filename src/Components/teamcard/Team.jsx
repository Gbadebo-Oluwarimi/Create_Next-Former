import React from 'react'
import './Team.css'
const Team = ({imgsrc, name, longtext, alty, stack, twitter, instagram,facebook, linkedin}) => {
  return (
    <div className='teamcard'>
      <div className="cover">
        <div className='userimg'>
<img src={imgsrc} alt={alty} style={{
  width:"150px",
  height:"150px",
  padding:"3px",
}}/>
        </div>
        </div>
        <div className='nametitle'>
<h3>{name}</h3>
        </div>
        <div className='whattodo'>
    <small>( {stack} )</small>
        </div>
        <div className='longtext'>
            <p>{longtext}</p>
        </div>
        <div className='social'>
            {twitter}{instagram}{facebook}{linkedin}
        </div>
    </div>
  )
}

export default Team