import { useEffect, useState } from "react";
import '../../data/productos.json'
import ItemList from "./ItemList";
import Paginacion from "./Paginacion";

function ItemListContainer({ categoriaSeleccionada }) {
  const [productos, setProductos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const porPagina = 9;
  console.log("recibí:", categoriaSeleccionada.toLowerCase());

// Funcion que obtiene el array de productos
  useEffect(() => {
    fetch('../../data/productos.json')
      .then(res => res.json())
      .then(data => setProductos(data.sort((a, b) => a.nombre.localeCompare(b.nombre))));
  }, []);

  const productosFiltrados = categoriaSeleccionada === "Todos"
    ? productos : productos.filter(p => p.categoria.includes(categoriaSeleccionada));
  
  const prod= productos.filter(p => p.categoria.includes(categoriaSeleccionada))
  console.log("productos:",prod);
  
  //Parametros de la paginacion
  const indiceFinal = pagina * porPagina;
  const indiceInicial = indiceFinal - porPagina;
  const productosPagina = productosFiltrados.slice(indiceInicial, indiceFinal);
  const totalPaginas = Math.ceil(productosFiltrados.length / porPagina);

    // Resetear a página 1 cuando cambia la categoría
  useEffect(() => {
    setPagina(1);
  }, [categoriaSeleccionada]);

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
