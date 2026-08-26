import { Link } from 'react-router-dom'
import './NavBar.css'
import CartWidget from './CartWidget';

const NavBar = () => { 
    return (
        <div className='div-navbar'>
            <ul className= "lista">
                <il>
                    <Link to={"/"} className='item'>Catalogo</Link>
                </il>
                <Link to={"/carrito"} className='item'><CartWidget></CartWidget></Link>
                
                <il>
                    <Link to={"checkout"} className='item'>Checkout</Link>
                </il>
            </ul>
        </div>
    ) };

export default NavBar;
