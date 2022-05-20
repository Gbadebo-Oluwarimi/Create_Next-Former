import React from 'react'
import './Nav.css'

const Nav = ({change}) => {
  return (
    <div className='navbar'>
     <nav>
     <e style={{fontSize:'40px', fontWeight:'bold', padding:0}}>Next</e>
       <ul>
         <li>Features</li>
         <li>Live</li>
         <li>Mission</li>
         <li>About</li>
       </ul>
     </nav>
     <div className='hamburger'>
       <span onClick={() => change()}>|||</span>
     </div>
     <div className='right-bar'>
     <button>Register</button>
     <span style={{marginLeft:'10px', cursor:'pointer'}}>Login</span>
     </div>
     </div>
  )
}

export default Nav