import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => { 
    return (
        <ul className= "lista">
            <il>
                <Link to={"/"} className='item' href="#">Catalogo</Link>
            </il>
            <il>
                <Link to={"carrito"} className='item' href="#">Carrito</Link>
            </il>
        </ul>
    ) };

export default NavBar;
