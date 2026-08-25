import { useContext } from 'react'
import './CardCarrito.css'
import { CartContext } from '../context/CartContext'

function CardCarrito(){
    const {cart} = useContext(CartContext)
    
    return (
        <div className='div-carrito'>
            {cart.map(item => (
            <div className='card-carrito'>
                <img src={`/${item.img}`} alt="Imagen producto" className='imagen'/>
                <div className="info" key={`${item.id}-${item.variedad}`}>
                    <h2>{item.nombre}</h2>
                    {item.variedad ? <p>Variedad: {item.variedad} </p> : ""}
                    <p>Precio: ${item.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                </div>
                <h4>Precio total: ${item.cantidad*item.precio}</h4>
            </div>
            ))}
        </div>
    )
}

export default CardCarrito
