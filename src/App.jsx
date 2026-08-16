import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Importar componenetes
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import Productos from './Pages/Productos.jsx'
import Carrito from './Pages/Carrito.jsx'
import Error404 from './Pages/Error404.jsx'
import './App.css'

function App() {
  
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/productos' element={<Productos/>}></Route>
      <Route path='/carrito' element={<Carrito/>}></Route>
      <Route path='/*' element={<Error404/>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
