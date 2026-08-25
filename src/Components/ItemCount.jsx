import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function ItemCount({ producto, variedad, stock }) {
  const [contador, setContador] = useState(0);
  const [visible_contador, setvisible_contador] = useState(false);
  const productoSeleccionado = {}
  // Obtenemos la función del Context
  const {agregarAlCarrito, quitarDelCarrito} = useContext(CartContext);

  const agregarCarrito = () => {
    setvisible_contador(true)
    setContador(1)
    const productoSeleccionado = {
      id: producto.id,
      nombre: producto.nombre,
      img: producto.img,
      precio: producto.precio,
      variedad: variedad,
      cantidad: contador
    };
    agregarAlCarrito(productoSeleccionado);
    {console.log(producto.id, producto.variedad, productoSeleccionado)}
  };
  
  const sumarProducto = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
    const productoSeleccionado = {
      ...productoSeleccionado,
      cantidad: contador
    };
    // Enviamos ese objeto al Context
    agregarAlCarrito(productoSeleccionado);
  };

  const restarProducto = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
    const productoSeleccionado = {
      ...productoSeleccionado,
      cantidad: contador
    };
    agregarAlCarrito(productoSeleccionado);
  };

  const quitarProducto = () => { 
    setvisible_contador(false)
    setContador(0)
    quitarDelCarrito(producto.id, producto.variedad)
    {console.log(producto.id, producto.variedad, productoSeleccionado)}
  }   
  
  return (
    <div>
      {visible_contador ? 
        <div>
          <div className='div-botonera'>  
            <button className='boton' onClick={restarProducto}  disabled={contador===1}>- </button>
            <p>{contador}</p>
            <button className='boton' onClick={sumarProducto} disabled={contador===stock}> + </button>
          </div>
          <div>
              <button className='boton' onClick={quitarProducto}> X </button>
          </div>
        </div> : 
        <button onClick={agregarCarrito} className='agregar-carrito'> Agregar al carrito</button>}      
    </div>
  );
}

export default ItemCount;