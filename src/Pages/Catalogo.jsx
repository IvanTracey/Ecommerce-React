import React from 'react'
import Productos from '../Productos'
import ItemListContainer from '../Components/ItemListContainer'
import Categorias from '../Components/Categorias'
import Paginacion from '../Components/Paginacion'
import './Catalogo.css'

function Catalogo (){
  return (
    <div className='div-catalogo'>
        <div className='div-categorias'>
            <Categorias></Categorias>
        </div>
        <div className='div-cardproducts'>
             <ItemListContainer></ItemListContainer>
        </div>
    </div>
  )
}

export default  Catalogo;

