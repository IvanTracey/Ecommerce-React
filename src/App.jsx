import { Routes, Route } from 'react-router-dom'

// Importar componenetes
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import Catalogo from './Pages/Catalogo.jsx'
import Carrito from './Pages/Carrito.jsx'
import Checkout from './Pages/Checkout.jsx'
import Error404 from './Pages/Error404.jsx'
import './App.css'
import Productos from './Pages/Productos.jsx'


function App() {
  
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Catalogo/>}></Route>
      <Route path='/producto/:id' element={<Productos/>}></Route>
      <Route path='/carrito' element={<Carrito/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
      <Route path='/*' element={<Error404/>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
