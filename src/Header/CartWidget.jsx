import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../context/CartContext';
import { useContext } from "react";
import './CartWidget.css'

const CartWidget = () => {
    const {cart} = useContext(CartContext)
    const cantidadItems = cart.reduce((total, item) => total + item.cantidad,0);
    return(
        <div className="div-widget">
        <FaShoppingCart fontSize={'1.2rem'}/>  
        <span className="badge-carrito">{cantidadItems}</span>
        </div>
    )
}

export default CartWidget