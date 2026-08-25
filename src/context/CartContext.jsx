import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCart(prevCart => {
      const productoExistente = prevCart.find(item => item.id === producto.id && item.variedad === producto.variedad);
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
// Se actualiza el nuevo valor
    const modificarCantidad = (id, variedad, nuevaCantidad) => {
      setCart(prevCart => {
        return prevCart.map(item => {
          if (item.id === id && item.variedad === variedad) {
            return {
              ...item,
              cantidad: nuevaCantidad
            };
          }
          return item;
        });
    });
};

  const vaciarCarrito = () => {
      setCart([]);
  };

  return (
    <CartContext.Provider value={{cart, agregarAlCarrito, quitarDelCarrito, modificarCantidad, vaciarCarrito}}>
      {children}
    </CartContext.Provider>
  );
};