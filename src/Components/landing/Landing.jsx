import React from 'react'
import './Landing.css'

const Landing = () => {
  return (
      <div className='land'>
   <div className='landing'>
       <div className='left'>
           <div className="circlesvg"/>
        <div className='Big-text'>
            <span style={{fontSize:'100px', fontWeight:'bold', width:'20%'}}><e>Create<br/> Next<span style={{color:'#e6e6e6'}}> work</span></e></span>
            <div className='small'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil neque corporis laborum non debitis, harum facilis sunt quidem </p>
            </div>
            <div className='button'>
                <input type="submit" value="Submit"/>
            </div>
            <div className='svgs' style={{marginTop:'70px'}}>
                <p><span style={{fontWeight:'bold', fontSize:"20px"}}>Our Sponsors:</span></p>
                <img src='/assets/client-maker.svg' alt='...' style={{marginRight:'10px'}}></img>
                <img src='/assets/client-meet.svg' alt='...' style={{marginRight:'10px'}}></img>
                <img src='/assets/client-databiz.svg' alt='...' style={{marginRight:'10px'}}></img>
                <img src='/assets/client-audiophile.svg' alt='...' style={{marginRight:'10px'}}></img>
            </div>

        </div>
       </div>
       <div className='right' style={{padding:0}}>
       <img src='/assets/image-hero-desktop.png' alt='ahhh ko work ni' style={{paddingLeft:'100px',width:'490px', height:'500px',marginTop:'30px'}}/>
       </div>
   </div>
</div>
  )
}

export default Landing