import { useEffect, useState } from "react";
import '../../data/productos.json'
import ItemList from "./ItemList";
import Paginacion from "./Paginacion";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const porPagina = 9;

// Funcion que obtiene el array de productos
  useEffect(() => {
    fetch('../../data/productos.json')
      .then(res => res.json())
      .then(data => setProductos(data));
  }, []);

  //Parametros de la paginacion
  const indiceFinal = pagina * porPagina;
  const indiceInicial = indiceFinal - porPagina;
  const productosPagina = productos.slice(indiceInicial, indiceFinal);
  const totalPaginas = Math.ceil(productos.length / porPagina);

  return (
    <>
    // Muestro un recorte del array
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
