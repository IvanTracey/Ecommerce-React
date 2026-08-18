import { useState } from 'react';
import ItemList from '../Components/ItemList'
import './Card.css'

// Creo la estructura de la Card y designo con que informacion la relleno
function Card({ producto }) {
  const [contador, setContador]= useState(0);

  const incrementarCont = () => {
    setContador(contador + 1);
  };
  const decrementarCont = () => {
    if(contador!=0){
      setContador(contador - 1);
    }
  };
  return (
    <div className="card">
      <img className='card-img' src={producto.img} alt={producto.nombre} />
      <div className="div-nombre">
        <h3>{producto.nombre}</h3>
      </div>
      <div className="div-descripcion">
        <p>{producto.descripcion}</p>
      </div>
      <div className='div-precio'>
        <h4>${producto.precio}</h4>
      </div>
      <div className='div-botonera'>
        <button className='boton' onClick={decrementarCont}>-</button>
        <p>{contador}</p>
        <button className='boton' onClick={incrementarCont}>+</button>
      </div>
    </div>
  );
}

export default Card;