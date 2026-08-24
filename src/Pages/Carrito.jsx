import { useContext } from 'react';
import './Carrito.css'
import { CartContext } from '../context/CartContext';
import CardCarrito from '../Components/CardCarrito';

function Carrito() {
  const contexto_carrito = useContext(CartContext)
  return (
    <div className='div-carrito'>
      <div className="header-carrito">
        <h2>Carrito</h2>
        <p>TOTAL: $ -  items</p>
      </div>
      <hr />
      <div className="body-carrito">
        <CardCarrito></CardCarrito>
      </div>
    </div>
    
  )
}

export default Carrito;