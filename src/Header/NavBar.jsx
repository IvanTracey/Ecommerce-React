import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => { 
    return (
        <ul className= "lista">
            <il className= "nav-item">
                <Link to={"/productos"} className= "item" href="#">Productos</Link>
            </il>
            <il className= "nav-item">
                <Link to={"carrito"} className= "item" href="#">Carrito</Link>
            </il>
        </ul>
    ) };

export default NavBar;
