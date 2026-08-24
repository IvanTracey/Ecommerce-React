import { createContext, useState } from "react";
export const CartContext = createContext();
// Provider: todo lo que esté dentro de CartProvider podrá acceder al carrito.
export const CartProvider = ({ children }) => {
  // Acá se guarda la información del carrito
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCart(prevCart => {
      // Si ya existe el mismo producto con la misma variedad.
      const productoExistente = prevCart.find(
        item => item.id === producto.id && item.variedad === producto.variedad);
      // Si ya existe, aumentamos la cantidad
      if (productoExistente) {
        return prevCart.map(item => {
          if (item.id === producto.id && item.variedad === producto.variedad) {
            return {
              ...item,
              cantidad: item.cantidad + producto.cantidad
            };
          }
          return item;
        });
      }
      // Si no existe, lo agregamos
      return [
        ...prevCart,
        producto
      ];
    });
  };

  const quitarDelCarrito = (id, variedad) => {
    setCart(prevCart =>
      prevCart.filter(item => !(item.id === id && item.variedad === variedad))
    );
  };

  const vaciarCarrito = () => {
      setCart([]);
  };

  return (
    <CartContext.Provider value={{cart, agregarAlCarrito, quitarDelCarrito, vaciarCarrito}}>
      {children}
    </CartContext.Provider>
  );
};