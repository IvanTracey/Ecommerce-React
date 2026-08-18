import ItemList from '../Components/ItemList'
import './Card.css'

// Creo la estructura de la Card y designo con que informacion la relleno
function Card({ producto }) {
  return (
    <div className="card">
      <img className='card-img' src={producto.img} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
    </div>
  );
}

export default Card;