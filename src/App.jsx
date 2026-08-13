import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Importar componenetes
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import Inicio from './Pages/Inicio.jsx'
import Productos from './Pages/Productos.jsx'
import Contacto from './Pages/Contacto.jsx'
import Error404 from './Pages/Error404.jsx'
import './App.css'

function App() {
  
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/*' element={<Error404/>}></Route>
      <Route path='/productos' element={<Productos/>}></Route>
      <Route path='/contacto' element={<Contacto/>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
