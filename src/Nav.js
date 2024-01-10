import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='Nav'>
    <ul >
        <li ><Link to = "/" className='Nav-Btn' >Home</Link></li>
        <li><Link to = "/list" className='Nav-Btn'>Menu</Link></li>
    </ul>
    </nav>
    
  )
}

export default Nav