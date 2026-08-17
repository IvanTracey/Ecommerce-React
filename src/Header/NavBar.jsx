import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => { 
    return (
        <ul className= "lista">
            <il>
                <Link to={"/"} className='item'>Catalogo</Link>
            </il>
            <il>
                <Link to={"carrito"} className='item'>Carrito</Link>
            </il>
            <il>
                <Link to={"checkout"} className='item'>Checkout</Link>
            </il>
        </ul>
    ) };

export default NavBar;
