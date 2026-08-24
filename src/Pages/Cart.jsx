import { useCart } from "../context/CartContext";
import CartCarrito from "../components/CartCarrito";

const Cart = () => {
  const { cartItems, getTotal, clearCart } = useCart();

  if (cartItems.length === 0) return <p>Tu carrito está vacío</p>;

  return (
    <div>
      {cartItems.map((item) => (
        <CartCarrito key={`${item.id}-${item.variedad}`} producto={item} />
      ))}
      <h3>Total: ${getTotal()}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};