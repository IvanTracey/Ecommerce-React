import React from 'react'
import './Checkout.css'

function Checkout() {
  return (
    <div className='div-checkout'>Checkout</div>
  )
}

export default Checkout;

/*
Generación de un documento de orden en Firestore al confirmar una compra, almacenando:


Datos del comprador

Productos adquiridos

Cantidades

Precio total

Fecha de la operación*/