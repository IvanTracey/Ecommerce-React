import { useContext } from 'react'
import './CardCarrito.css'
import { CartContext } from '../context/CartContext'

function CardCarrito(){
    const productoSeleccionado = useContext(CartContext)
    return (
        <div className='card-carrito'>
            <img src="producto.img" alt="Imagen de producto" className='imagen'/>
            <div className="info">
                <h2>{productoSeleccionado.nombre}</h2>
                <p>Variedad: x </p>
                <p>Precio: </p>
                <p>Cantidad:</p>
            </div>
            <div className="div-precio">
                <h4>Precio total: </h4>
                <p>$xxxxx</p>
            </div>
        </div>
    )
}

export default CardCarrito
