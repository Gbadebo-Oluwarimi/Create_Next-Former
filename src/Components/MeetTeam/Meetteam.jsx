import React from 'react'
import Team from '../teamcard/Team'
import './Meetteam.css'
const Meetteam = () => {
  return (
    <div className='meetteam'>
      <h1>Meet the <span style={{color:"blueviolet", fontSize:"40px"}}>team</span> </h1>
      <div className='textmeet' style={{
        margin:"0 auto",
        maxWidth:"500px",
        textAlign:"center"

      }}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates rerum adipisci nihil velit? Dolorum eligendi debitis, nulla</p>
      </div>
      <div className='cardie'>
        <Team imgsrc="assets/49.png" alty="nothing" name="Gbadebo Oluwarimi" longtext="nonsense" stack="FullStack Dev" twitter="twitter" instagram="instagram" linkedin="linkedin"/>
        <Team imgsrc="/assets/49.png" alty="nothing" name="Gabriel Ifechukwu" longtext="nonsense" stack="Full Stack and web3" facebook="facebook"/>
        <Team imgsrc="/assets/93.png" alty="nothing" name="Mohammed Kabir" longtext="nonsense" stack="Fullstack and Flutter dev" instagram="instagram"/>
      </div>
    </div>
  )
}

export default Meetteam