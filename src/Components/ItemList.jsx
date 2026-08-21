import Card from '../Components/Card'
import './ItemList.css'

// Le doy el array de productos y lo mapea sacando la infomacion
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