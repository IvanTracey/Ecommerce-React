import React from 'react'
import './Footer.css'

function Footer(){
  return (
    <div className='footer'>
      <div className='div-footer'>
        <p>© 2026 Buena vibra. Todos los derechos reservados.</p>
        <p>Política de privacidad</p>
        <p>Términos y condiciones</p>
      </div>
      <div className='div-redes'>
        <img src="../../img/logo_fb.png" alt="logo facebook" className='logo'/>
        <img src="../../img/logo_ig.png" alt="logo instagram" className='logo' />
        <img src="../../img/logo_wa.png" alt="logo whats app" className='logo' />
      </div>
    </div>
  )
}

export default Footer;
