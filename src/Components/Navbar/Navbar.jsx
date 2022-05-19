import React from 'react'
import {useState} from 'react'
import Leftbar from '../leftbar/Leftbar'
import Nav from '../Nav/Nav'
import './Navbar.css'

const Navbar = () => {
  const [appbar, setAppbar] = useState(true)
  const settofalse = () => {
    console.log("changed to false")
    setAppbar(false);
  }
  const settotrue = () => {
    console.log("changed to true")
    setAppbar(true);
  }
  return (
    <>
    {
      appbar ? <Leftbar change={settofalse}/> : <Nav change={settotrue}/>
    }
     </>
  )
}

export default Navbar
