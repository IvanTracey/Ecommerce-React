import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function ItemCount({ producto, variedad, stock }) {
  const [contador, setContador] = useState(0);
  // Obtenemos la función del Context
  const {agregarAlCarrito, quitarDelCarrito} = useContext(CartContext);
  const incrementarCont = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const decrementarCont = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  const agregarCarrito = () => {
    const productoSeleccionado = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      variedad: variedad,
      cantidad: contador
    };
    // Enviamos ese objeto al Context
    agregarAlCarrito(productoSeleccionado);
    {console.log(productoSeleccionado)}
  };
  return (
    <div>
      <div className='div-botonera'>
        <button className='boton' onClick={decrementarCont}> - </button>
        <p>{contador}</p>
        <button className='boton' onClick={incrementarCont}> + </button>
      </div>
      <button onClick={agregarCarrito} className='agregar-carrito'> Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;