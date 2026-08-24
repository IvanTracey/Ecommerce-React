import { createRoot } from 'react-dom/client'
// Da lugar a que Routes y Route funcionen
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <App /> 
    </CartProvider>
  </BrowserRouter>
)
