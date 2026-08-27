import { useContext, useState } from 'react';
import './Checkout.css';
import { CartContext } from '../context/CartContext';
import { db } from '../firebase/firebaseConfigure';
import {collection, addDoc, serverTimestamp} from 'firebase/firestore';

function Checkout() {
    const { cart, vaciarCarrito } = useContext(CartContext);
    // Datos del comprador
    const [datosComprador, setDatosComprador] = useState({
      nombre: "",
      apellido: "",
      email: "",
      telefono: ""
    });

    // Datos del carrito
    const cantidadItems = cart.reduce((total, item) => total + item.cantidad, 0);

    const montoTotal = cart.reduce((total, item) => total + item.precio * item.cantidad, 0);

    // Estado de la orden
    const [ordenCreada, setOrdenCreada] = useState(null);
    const [resumenOrden, setResumenOrden] = useState(null);

  // Manejar inputs
    const handleChange = (e) => {
      const { name, value } = e.target;
      setDatosComprador({
        ...datosComprador,
        [name]: value
      });
    };

    const crearOrden = async () => {
      const productosOrden = cart.map(item => ({
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        variedad: item.variedad ?? null,
        cantidad: item.cantidad
      }));
      const orden = {
        comprador: datosComprador,
        productos: productosOrden,
        cantidadItems: cantidadItems,
        total: montoTotal,
        fecha: serverTimestamp()
      };
      try {
        const docRef = await addDoc(
          collection(db, "ordenes"),
          orden
        );
        return docRef.id;
      } catch (error) {
        console.error("Error al crear la orden:", error);
        return null;
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const idOrden = await crearOrden();
      if (idOrden) {
      // Guardamos estos datos antes de vaciar el carrito
        setResumenOrden({
            cantidadItems: cantidadItems,
            total: montoTotal
        });
        setOrdenCreada(idOrden);
        vaciarCarrito();
      }
    };

    // Si se ejecuto la compra, cartel
    if (ordenCreada) {
      return (
        <div className="div-checkout">
          <div className="orden-confirmada">
            <h2>¡Compra realizada!</h2>
            <p>Tu compra fue registrada correctamente. </p>
            <p>Número de orden: </p>
            <strong>{ordenCreada}</strong>
            <p>Cantidad de items</p>
            <strong>{resumenOrden.cantidadItems}</strong>
            <p>Total de la compra</p>
            <strong>${resumenOrden.total}</strong>
          </div>
        </div>
      );
    }
    // Con la compra sin ejecutar, formulario
    return (
      <div className="div-checkout">
        <h2>Checkout</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <h3>Datos del comprador</h3>
          <div className='div-form'>
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={datosComprador.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className='div-form'>
            <label htmlFor="apellido">Apellido</label>
            <input
              id="apellido"
              name="apellido"
              type="text"
              value={datosComprador.apellido}
              onChange={handleChange}
              required
            />
          </div>
          <div className='div-form'>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={datosComprador.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='div-form'>
            <label htmlFor="telefono">Teléfono</label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              value={datosComprador.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <div className='resumen-compra'>
            <h3>Resumen de compra</h3>
            <p>Cantidad de items:{" "}{cantidadItems}</p>
            <p>Total:{" "}${montoTotal}
            </p>
          </div>
          <button type="submit">Confirmar compra</button>
        </form>
      </div>
    );
}

export default Checkout;