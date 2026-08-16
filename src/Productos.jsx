import { useParams } from 'react-router-dom'
import './Productos.css'
import '../data/productos.json'

const Productos = () => {
  // Sector de variables --------------------
    const arrayProductos = [
        {id: 1, name: "Hamburgesas", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kKXdw3Ku/200/200/original?country=ar"},
        {id: 2, name: "Sandwich de pollo", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$k5XhSNp5/200/200/original?country=ar"},
        {id: 3, name: "Papas fritas y complementos", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kKX4MZKT/200/200/original?country=ar"},
        {id: 4, name: "Ensalada", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kGXmuT46/200/200/original?country=ar"},
        {id: 5, name: "Bebidas", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kcX2292z/200/200/original?country=ar"},
        {id: 6, name: "Postres", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kcXjLPM7/200/200/original?country=ar"}
    ];
    
    const {id} = useParams();
    /* Si no hay id, paso el array completo */
    const items = id ? arrayProductos.filter(item => item.id == id) : arrayProductos;

    return (
        <div>
            <div>
                {items.map(item => (
                    <div key={item.id}>
                        <div>
                            <img src={item.imagen} alt={item.name} />
                            <div>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default  Productos;

