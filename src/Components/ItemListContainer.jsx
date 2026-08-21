import { useEffect, useState } from "react";
import '../../data/productos.json'
import ItemList from "./ItemList";
import Paginacion from "./Paginacion";

function ItemListContainer({ categoriaSeleccionada }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Parametros de la paginacion
  const [pagina, setPagina] = useState(1);
  const porPagina = 9;
  
  // Resetear a página 1 cuando cambia la categoría
  useEffect(() => {
    setPagina(1);
  }, [categoriaSeleccionada]);

// Funcion que obtiene el array de productos
  useEffect(() => {
    fetch('../../data/productos.json')
      .then(res => res.json())
        .then(data => {
          setProductos(data.sort((a, b) => a.nombre.localeCompare(b.nombre)))
          setLoading(false)
        })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
    }, []);

    if (loading) return <p>Cargando producos...</p>;
    if (error) return <p>Error al cargar los productos</p>;

  const productosFiltrados = categoriaSeleccionada === "Todos"
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
