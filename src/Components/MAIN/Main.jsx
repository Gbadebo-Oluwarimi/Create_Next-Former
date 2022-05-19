import React from 'react'
import './Main.css'
const SectionMain = () => {
  return (
    <div className='section'>
        <div className='flexy'>
            <div className='left-2'>
              <div className='left-content'>
   <div className='title-left'>
     <h1>What We <span style={{color:"blueviolet"}}>Do</span>:</h1>
   </div>
   <div className='content-1'>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam molestias itaque voluptatibus odio excepturi reprehenderit ea illo, similique, pariatur nisi! Fugiat neque adipisci sapiente, quisquam eaque maiores qui excepturi.</p>
   </div>
   <div className='list-content'>
     <div className='list-content-1'>
       <div className='icons'>
     <i class="fi fi-rr-paper-plane" id="icon1" style={{padding:"10px"}}></i>
     </div>
     <div className='content-list'>
        <div className='title-list'>
          <h2 style={{paddingTop:"10px"}}>Send And Receive </h2>
          <p style={{padding:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ab, aperiam necessitatibus impedit, vel voluptas explicabo non ipsam voluptatum nobis reprehenderit. Expedita, dolore. Hic blanditiis id ea? Veniam, officia eius.</p>
        </div>
      
     </div>
     </div>
     
     <div className='list-content-1' style={{marginTop:"50px", marginBottom:"40px"}}>
       <div className='icons'>
     <i class="fi fi-rr-envelope" style={{color:"#2ba7e2bf", position:"relative", top:"20px", fontSize:"50px", justifyContent:"center"}}></i>
     </div>
     <div className='content-list'>
        <div className='title-list'>
          <h2 style={{paddingTop:"10px"}}>Quick And Fast 🚀 </h2>
          <p style={{padding:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ab, aperiam necessitatibus impedit, vel voluptas explicabo non ipsam voluptatum nobis reprehenderit. Expedita, dolore. Hic blanditiis id ea? Veniam, officia eius.</p>
        </div>
      
     </div>
     </div>

   </div>
   </div>
         </div>
            <div className='right-2'>
<img src="/assets/49.png" alt='djdj'style={{width:"300px", height:"300px"}}/>
            </div>
        </div>
    </div>
  )
}

export default SectionMain