import { useState } from "react";


function ItemCount({ stock }){
    const [contador, setContador]= useState(0);
    const incrementarCont = () => {
    if(contador < stock){
        setContador(contador + 1);
    }
    };
    const decrementarCont = () => {
    if(contador > 0){
        setContador(contador - 1);
    }
    };
  const [visible_bot, setVisible_bot] = useState(true);
  const agregarCarrito = () => {
    setVisible_bot(!visible_bot);
  }
    return(
      <div>
        {visible_bot ? 
        <button onClick={agregarCarrito} className='agregar-carrito'>Agregar al carrito</button> : 
        <div>     
          <div className='div-botonera'>
            <button className='boton' onClick={decrementarCont}>-</button>
            <p>{contador}</p>
            <button className='boton' onClick={incrementarCont}>+</button>
          </div>
            <button className='boton' onClick={agregarCarrito}>X</button>
        </div>}
      </div>   
    )
}

export default ItemCount;