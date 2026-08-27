import { useEffect, useState } from "react";
import '../../data/productos.json'
import ItemList from "./ItemList";
import Paginacion from "./Paginacion";
import {db} from "../firebase/firebaseConfigure"
import { collection, getDocs } from "firebase/firestore";

function ItemListContainer({ categoriaSeleccionada }) {
  const [productos, setProductos] = useState([]);

  useEffect( () => {
    async function fetchProductos() {
      const productosCollection = collection(db, "productos")
      const productosSnapshot = await getDocs(productosCollection) 
      const productosList = productosSnapshot.docs.map(
        doc => ({id: doc.id, ...doc.data()}))
      setProductos(productosList)
    }
    fetchProductos()
  }, [])
  
  //Parametros de la paginacion
  const [pagina, setPagina] = useState(1);
  const porPagina = 9;
  
  // Resetear a página 1 cuando cambia la categoría
  useEffect(() => {
    setPagina(1);
  }, [categoriaSeleccionada]);  const productosFiltrados = categoriaSeleccionada === "Todos"
    ? productos : productos.filter(p => p.categoria.includes(categoriaSeleccionada));

  const indiceFinal = pagina * porPagina;
  const indiceInicial = indiceFinal - porPagina;
  const productosPagina = productosFiltrados.slice(indiceInicial, indiceFinal);
  const totalPaginas = Math.ceil(productosFiltrados.length / porPagina);

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
