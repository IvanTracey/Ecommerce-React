import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ItemCount({ producto, variedad, stock }) {
  const {cart, agregarAlCarrito, quitarDelCarrito, modificarCantidad} = useContext(CartContext);

  const productoEnCarrito = cart.find(item =>
  item.id === producto.id && item.variedad === variedad);

  const agregarCarrito = () => {
    const productoSeleccionado = {
      id: producto.id,
      nombre: producto.nombre,
      img: producto.img,
      precio: producto.precio,
      variedad: variedad,
      cantidad: 1
    };
    agregarAlCarrito(productoSeleccionado);
  };
  
  const sumarProducto = () => {
    const nuevaCantidad = productoEnCarrito.cantidad + 1;
    if (nuevaCantidad <= stock) {
      modificarCantidad(producto.id, variedad, nuevaCantidad)
    }
  };

  const restarProducto = () => {
    const nuevaCantidad = productoEnCarrito.cantidad + 1;
    if (nuevaCantidad <= 1) {
      modificarCantidad(producto.id, variedad, nuevaCantidad)
    }
  };

  const quitarProducto = () => { 
    quitarDelCarrito(producto.id, variedad)
  }   
  
  return (
    <div>
      {!productoEnCarrito ?
        <button onClick={agregarCarrito} className="agregar-carrito">Agregar al carrito</button> :
        <div>
          <div className='div-botonera'>  
            <button className='boton' onClick={restarProducto}  disabled={productoEnCarrito.cantidad === 1}>- </button>
            <p>{productoEnCarrito.cantidad}</p>
            <button className='boton' onClick={sumarProducto} disabled={productoEnCarrito.cantidad === stock}> + </button>
          </div>
          <div>
              <button className='boton' onClick={quitarProducto}> Quitar del carrito </button>
          </div>
        </div>
      }
    </div>
  );
}

export default ItemCount;
