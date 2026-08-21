import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Productos.css'

function Productos() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('../data/productos.json')
      .then(res => res.json())
      .then(data => {
        const encontrado = data.find(p => p.id === id || p.id === Number(id));
        setProducto(encontrado ?? null);
        setLoading(false);
      })
      .catch(err => { setError(err); setLoading(false); });
  }, [id]);   //si el id cambia (yendo de un producto a otro), refetchea

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error al cargar el producto</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className='div-producto-id'>
      <div className="div-img">
        <img src={`/${producto.img}`} alt={producto.nombre} className='card-img'/>
      </div>
      <div className="div-info">
        <h2>{producto.nombre}</h2>  
        <p>{producto.descripcion}</p>
        <h4>${producto.precio}</h4>
        <button>
          <Link to={"/"} className='item'>Volver</Link>
        </button>
      </div>
    </div>
  );
}

export default Productos;