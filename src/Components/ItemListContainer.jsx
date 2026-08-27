import { useEffect, useState } from "react";
import '../../data/productos.json'
import ItemList from "./ItemList";
import Paginacion from "./Paginacion";
import {db} from "../firebase/firebaseConfigure"
import { collection, getDocs } from "firebase/firestore";
import OrbitProgress from "react-loading-indicators/OrbitProgress";

function ItemListContainer({ categoriaSeleccionada }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () => {
    async function fetchProductos() {
      try{
        setLoading(true)
        setError(null)  
        const productosCollection = collection(db, "productos")
        const productosSnapshot = await getDocs(productosCollection) 
        const productosList = productosSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        setProductos(productosList)
      } catch (err){
        setError("No se pudieron cargar los productos")
      } finally{
        setLoading(false)
      }
    }
    fetchProductos()
  }, [])
  
  //Parametros de la paginacion
  const [pagina, setPagina] = useState(1);
  const porPagina = 9;
  
  // Resetear a página 1 cuando cambia la categoría
  useEffect(() => {
    setPagina(1);
  }, [categoriaSeleccionada]);  

  const productosFiltrados = categoriaSeleccionada === "Todos" ? productos : productos.filter(p => p.categoria.includes(categoriaSeleccionada));

  const indiceFinal = pagina * porPagina;
  const indiceInicial = indiceFinal - porPagina;
  const productosPagina = productosFiltrados.slice(indiceInicial, indiceFinal);
  const totalPaginas = Math.ceil(productosFiltrados.length / porPagina);

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
