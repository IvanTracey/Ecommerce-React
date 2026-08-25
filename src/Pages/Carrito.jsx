import { useContext } from 'react';
import './Carrito.css'
import { CartContext } from '../context/CartContext';
import CardCarrito from '../Components/CardCarrito';

function Carrito() {
  return (
    <div className='carrito'>
      <div className="header-carrito">
        <h2>Carrito</h2>
        <p>TOTAL A PAGAR ${} - {} items</p>
      </div>
      <hr />
      <div className="body-carrito">
        <CardCarrito ></CardCarrito>
      </div>
    </div>
    
  )
}

export default Carrito;