import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Productos.css'
import {db} from "../firebase/firebaseConfigure"
import { doc, getDoc } from "firebase/firestore";
import OrbitProgress from "react-loading-indicators/OrbitProgress";

function Productos() {
  const { id } = useParams();
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {const obtenerProducto = async () => {
    try {
      const referencia = doc(db, "productos", id );
      const resultado = await getDoc(referencia);
      // Si existe producto con ID ingresado, trae solo ese producto de la db
      if (resultado.exists()) {
          setProducto({
            //el ID no esta dentro de la informacion, uso ID automatico
            id: resultado.id,
            ...resultado.data()
          });
      } else {
        setProducto(null);
      }
    } catch (err) {
        setError(err);
    } finally {
      setLoading(false);}
    };
    obtenerProducto();
  }, [id]);
  if (!producto) return <p>Producto no encontrado</p>;
  if (loading) return <OrbitProgress variant="spokes" color="#6ec26e" size="medium" text="" textColor="" />;
  if (error) return <p>{error}</p>;

  return (
    <div className='div-producto-id'>
      <div className="div-img">
        <img src={`/${producto.img}`} alt={producto.nombre} className='card-img'/>
      </div>
      <div className="div-info">
        <h2>{producto.nombre}</h2>  
        <p>{producto.descripcion}</p>
        {producto.variedades?.length > 0 && (
          <p>
            Variedades: {producto.variedades.map(v => v.nombre).join(", ")}
          </p>
        )}
        <h4>${producto.precio}</h4>

        <button>
          <Link to={"/"} className='item'>Volver</Link>
        </button>
      </div>
    </div>
  );
}

export default Productos;