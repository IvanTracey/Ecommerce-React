import { useContext } from 'react';
import './Carrito.css'
import { CartContext } from '../context/CartContext';
import CardCarrito from '../Components/CardCarrito';
import { Link } from 'react-router-dom';

function Carrito() {
  const {cart} = useContext(CartContext)
  const cantidadItems = cart.reduce((total, item) => total + item.cantidad,0);
  const montoTotal = cart.reduce((total, item) => total + item.precio * item.cantidad, 0);

  const finalizarCompra = () => {
    
  }
  return (
    <div className='carrito'>
      <div className="header-carrito">
        <h2>Carrito</h2>
        {cantidadItems ? <p>TOTAL A PAGAR ${montoTotal} - {cantidadItems} items</p> : <p>Vacío</p>}
      </div>
      <hr />
      <div className="body-carrito">
          <CardCarrito></CardCarrito>
      </div>
      {cantidadItems ? <Link to={`../checkout`}><button>Finalizar compra</button></Link> : ""}
    </div>
    
  )
}

export default Carrito;