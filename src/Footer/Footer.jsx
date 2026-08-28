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
      <nav>
        <ul> 
          <li>
            <a href="https://www.instagram.com/diezpuntos.lp/" target="_blank" rel="noopener noreferrer"> 
              <img src="img/logo_ig.png" alt="Icono de Instagram" class="social-icon"></img>
            </a>  
          </li>
          <li><a href="https://www.facebook.com/diezpuntos.lp/" target="_blank" rel="noopener noreferrer"> <img src="img/logo_fb.png" alt="Icono de Facebook" class="social-icon"></img></a>  </li>
          <li><a href="https://wa.me/5492355411161" target="_blank" rel="noopener noreferrer"> <img src="img/logo_wa.png" alt="Icono de WhatsApp" class="social-icon"></img></a></li>   
        </ul>
      </nav>
    </div>
  )
}

export default Footer;
