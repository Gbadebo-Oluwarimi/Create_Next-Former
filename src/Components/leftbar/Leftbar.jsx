import React from 'react'
import './Leftbar.css'

const Leftbar = ({change}) => {
  return (
    <div className='leftbar'>
      <div className='main-nav'>
        <div className='top-nav' style={{
          padding:"5px",
          display:"flex",
          justifyContent:"space-between"
        }}>
          <h1>Next</h1>
         <e style={{
           paddingTop:"10px",
         }} onClick={() => change()}>X</e>
        </div>
        <ul>
          <li>
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Contact
          </li>
          <li>
            Mission
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Leftbar