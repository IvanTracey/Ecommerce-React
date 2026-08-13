import { Link } from 'react-router-dom'

const NavBar = () => { 
    return (
        <ul className= "nav justify-content-center">
	        <il className= "nav-item">
                <Link to={"/inicio"} className= "nav-link text-dark fw-bold" href="#">Inicio</Link>
            </il>
            <il className= "nav-item">
                <Link to={"/productos"} className= "nav-link text-dark fw-bold" href="#">Productos</Link>
            </il>
            <il className= "nav-item">
                <Link to={"contacto"} className= "nav-link text-dark fw-bold" href="#">Contacto</Link>
            </il>
        </ul>
    ) };

export default NavBar;
