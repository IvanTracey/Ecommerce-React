import { useEffect, useState } from "react";
import '../../data/productos.json'
import ItemList from "./ItemList";

// Funcion que obtiene el array de productos
function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('../../data/productos.json')
      .then(res => res.json())
      .then(data => setProductos(data));
  }, []);

  return <ItemList productos={productos} />;
}

export default ItemListContainer;