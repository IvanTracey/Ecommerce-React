import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css'
import ItemCount from './ItemCount';

// Creo la estructura de la Card y designo con que informacion la relleno
function Card({ producto }) {
  // Variedad seleccionada
  const [variedadSeleccionada, setVariedadSeleccionada] = useState(producto.variedades?.[0]?.nombre) || "";

  //Segun la variedad, traigo el objeto completo
  const variedad = producto.variedades?.find(
    (item) => item.nombre === variedadSeleccionada
  );
  // Stock que utilizara ItemCount: Si hay variedad seleccionada, usa variedad.stock, si no usa producto.stock, si tampoco existe stock=0
  const stock = variedad?.stock ?? producto.stock ?? 0;

  // Visualizacion de detalles
  const [visible_det, setVisible_det] = useState(false);
  const texto = visible_det ? "Ocultar" : "Detalles";
  const mostrarDetalles = () => {
    setVisible_det(!visible_det);
  }

  return (
    <div className="card">
      <Link to={`/producto/${producto.id}`} className='link'>
        <img className='card-img' src={producto.img} alt={producto.nombre} />
        <h3>{producto.nombre}</h3>
      </Link>
      
      <div className="div-descripcion">
        {visible_det ? <p>{producto.descripcion}</p> : ""}
        <button onClick={mostrarDetalles}>{texto}</button>
      </div>
      <div className="div-estilos">
        {producto.variedades?.length > 0 && (
        <select
          name="variedad"
          id={`variedad-${producto.id}`}
          value={variedadSeleccionada}
          onChange={(e) => setVariedadSeleccionada(e.target.value)}
        >
          {producto.variedades.map((variedad) => (
            <option
                key={variedad.nombre}
                value={variedad.nombre}>
                {variedad.nombre}
            </option>
          ))}
        </select>
        )}
      </div>
      <div className='div-precio'>
        <h4>${producto.precio}</h4>
      </div>
      <ItemCount
          key={variedadSeleccionada}
          producto={producto}
          variedad={variedadSeleccionada}
          stock={stock}
      />      
    </div>
  );
}

export default Card;