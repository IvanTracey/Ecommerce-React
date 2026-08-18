import Card from '../Components/Card'
import './ItemList.css'

// Le doy el array de productos y se crea la card para cada producto
function ItemList({ productos }) {
  return (
    <div className="item-list">
      {productos.map(producto => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ItemList;