import React from 'react'
import './Navbar.css'
import logo from '../../assets/netflexlogo.webp'
import search_icon from '../../assets/search.png'
import bell_icon from '../../assets/bel_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar"></div>
      <div className="navbar-left">
        <img src={logo}/>
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>MYlist</li>
            <li>Browse by languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} className='icons'/>
        <p>Children</p>
        <img src={bell_icon} className='icons'/>
      </div>
    </div>
  )
}

export default Navbar