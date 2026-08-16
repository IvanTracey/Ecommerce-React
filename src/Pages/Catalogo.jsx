import React from 'react'
import Productos from '../Productos';
import Paginacion from '../Components/Paginacion';
import './Catalogo.css'

function Catalogo (){
  return (
    <div className='div-catalogo'>
      <div className='div-categorias'>
        <p>Categorias</p>
      </div>
      <div className='div-cardproducts'>
        <Productos></Productos>
      </div>
      <div className="div-paging">
        <Paginacion></Paginacion>
      </div>
    </div>
  )
}

export default  Catalogo;

