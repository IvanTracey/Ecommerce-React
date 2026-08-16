import React from 'react'
import NavBar from './NavBar';
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='div-titulo'>
        <img src="../../img/logo_colibri.webp" alt="Logo de pagina" className='logo'/>
        <h1>Buena vibra</h1>
      </div>
    <NavBar></NavBar>
    </div>
  )
}

export default Header;