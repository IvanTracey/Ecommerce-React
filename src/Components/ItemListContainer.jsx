import { useEffect, useState } from "react";
import '../../data/productos.json'
import ItemList from "./ItemList";
import Paginacion from "./Paginacion";

// Funcion que obtiene el array de productos
function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const porPagina = 9;

  useEffect(() => {
    fetch('../../data/productos.json')
      .then(res => res.json())
      .then(data => setProductos(data));
  }, []);

  const indiceFinal = pagina * porPagina;
  const indiceInicial = indiceFinal - porPagina;
  const productosPagina = productos.slice(indiceInicial, indiceFinal);
  const totalPaginas = Math.ceil(productos.length / porPagina);

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
