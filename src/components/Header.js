import React from 'react'
import './Header.css';


const Header = () => {
  return (
    <header>
        <h1 id="main-h1">Family Wellness</h1>
        <p id="main-msg" style={{color : "grey"}}>MESSAGE THERAPY</p>
        <ul id="home-list">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>FAQ</li>
            <li>CONTACT</li>
        </ul>
    </header>
  )
}

export default Header
