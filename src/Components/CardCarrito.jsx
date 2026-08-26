import './CardCarrito.css'

function CardCarrito({item}){
    return (
        <div className='div-carrito'>
            <div className='card-carrito'>
                <img src={`/${item.img}`} alt="Imagen producto" className='imagen'/>
                
                <div className="info">
                    <h2>{item.nombre}</h2>
                    {item.variedad ? <p>Variedad: {item.variedad} </p> : ""}
                    <p>Precio unitario: ${item.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                </div>
                <h4>Precio total: ${item.cantidad*item.precio}</h4>
            </div>
        </div>
    )
}

export default CardCarrito
