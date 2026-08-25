import { createContext, useState } from "react";
export const CartContext = createContext();
// Provider: todo lo que esté dentro de CartProvider podrá acceder al carrito.
export const CartProvider = ({ children }) => {
  // Acá se guarda la información del carrito
  const [cart, setCart] = useState([]);

// El producto nunca esta en el carrito con anterioridad, se agrega una vez y luego se modifica la cantidad
  const agregarAlCarrito = (producto) => {
    setCart(prevCart => {
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