import { useEffect, useState } from "react";
import '../../data/productos.json'
import ItemList from "./ItemList";
import Paginacion from "./Paginacion";
import {db} from "../firebase/firebaseConfigure"
import { collection, getDocs, query, where } from "firebase/firestore";
import OrbitProgress from "react-loading-indicators/OrbitProgress";

function ItemListContainer({ categoriaSeleccionada }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
//Parametros de la paginacion
  const [pagina, setPagina] = useState(1);
  const porPagina = 9;
  
  useEffect( () => {
    async function obtenerProductos() {
      try{
        setLoading(true)
        setError(null)
        let consulta;
        if (categoriaSeleccionada === "Todos") {
          consulta = query(collection(db, "productos"));
        } else {
          consulta = query(
            collection(db, "productos"), where("categoria", "array-contains", categoriaSeleccionada)
          );
        } 
         
        const resultado = await getDocs(consulta)
        // Creo un array que integre el ID que devuelve firebase 
        const productosList = resultado.docs.map(doc => ({
          id: doc.id, 
          ...doc.data()
        }))
        setProductos(productosList.sort((a, b) => a.nombre.localeCompare(b.nombre)))
      } catch (err){
        setError("No se pudieron cargar los productos")
      } finally{
        setLoading(false)
      }
    }
    obtenerProductos()
    setPagina(1);
  }, [categoriaSeleccionada])
  
  const indiceFinal = pagina * porPagina;
  const indiceInicial = indiceFinal - porPagina;
  const productosPagina = productos.slice(indiceInicial, indiceFinal);
  const totalPaginas = Math.ceil(productos.length / porPagina);

  if (loading) return <OrbitProgress variant="spokes" color="#6ec26e" size="medium" text="" textColor="" />;
  if (error) return <p>{error}</p>;
  
  return (
    <>
      <ItemList productos={productosPagina} />
      <Paginacion
        pagina={pagina}
        totalPaginas={totalPaginas}
        onCambiarPagina={setPagina}
        />
    </>
  )
}

export default ItemListContainer;
