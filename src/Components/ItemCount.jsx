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
    return(
      <div className='div-botonera'>
        <button className='boton' onClick={decrementarCont}>-</button>
        <p>{contador}</p>
        <button className='boton' onClick={incrementarCont}>+</button>
      </div>
    )
}

export default ItemCount;