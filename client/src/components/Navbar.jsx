import React from 'react'
import Logo from '../images/logo.jpg'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt="parkingpass" />
        </div>
        <div className='links'>
          <Link className='link' to="/account">
            <h5>Mi Cuenta</h5>
          </Link>
          <Link className='link' to="/addcard">
            <h5>Añadir método de pago</h5>
          </Link>
          <span>Logout</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar

