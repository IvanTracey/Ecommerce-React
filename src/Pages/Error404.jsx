import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <div className='col text-center'>
            <p>Ups, ha ocurrido un error</p>
            <p><Link to={"/"} className='btn btn-warning'>Volver</Link></p>
        </div>
    )

}

export default Error404