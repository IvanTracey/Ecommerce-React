import { useContext } from 'react';
import './Carrito.css'
import { CartContext } from '../context/CartContext';
import CardCarrito from '../Components/CardCarrito';
import { Link } from 'react-router-dom';

function Carrito() {
  const {cart, vaciarCarrito} = useContext(CartContext)
  const cantidadItems = cart.reduce((total, item) => total + item.cantidad,0);
  const montoTotal = cart.reduce((total, item) => total + item.precio * item.cantidad, 0);

  return (
    <div className='carrito'>
      <div className="header-carrito">
        <h2>Carrito </h2>
        {cantidadItems ? <p>TOTAL A PAGAR ${montoTotal} ({cantidadItems} items)</p> : <p>(Vacío)</p>}
      </div>
      <div className="body-carrito">
        {cart.map(item => (
          <CardCarrito key={`${item.id}-${item.variedad}`} item={item}/>))
        }
      </div>
      {cantidadItems ? 
        <div className='div-botones'>
          <Link to={`/`}><button>Seguir comprando</button></Link>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
          <Link to={`../checkout`}><button>Finalizar compra</button></Link>
        </div> : "" }
    </div>
    
  )
}

export default Carrito;