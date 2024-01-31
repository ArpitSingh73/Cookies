import React from 'react'
import "./navbar.css"
import Logo from "../images/Ethereum.jpg"
function Navbar() {
  return (
    <div className='navbar'>
          Web3Wallet
          <img src={Logo} className='image'></img>
    </div>
  )
}

export default Navbar
