import { useState } from "react"
import ItemListContainer from '../Components/ItemListContainer'
import Categorias from '../Components/Categorias'
import './Catalogo.css'

function Catalogo (){
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  return (
    <div className='div-catalogo'>
        <div className='div-categorias'>
          <Categorias             
            categoriaActiva={categoriaSeleccionada}
            onSelectCategoria={setCategoriaSeleccionada}
          />
        </div>
        <div className='div-cardproducts'>
          <ItemListContainer categoriaSeleccionada={categoriaSeleccionada} />
        </div>
    </div>
  )
}

export default  Catalogo;

