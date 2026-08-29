# Ecommerce React

E-commerce desarrollado con React como proyecto de práctica para la implementación de una tienda online.

La aplicación permite visualizar un catálogo de productos, filtrarlos por categorías, consultar el detalle de cada producto, agregarlos a un carrito y realizar un proceso básico de checkout.

## Funcionalidades

- Catálogo dinámico de productos.
- Filtrado de productos por categorías.
- Paginación del catálogo.
- Vista detallada de cada producto.
- Selección de cantidades y variedades.
- Carrito de compras mediante Context API.
- Cálculo de cantidades y precio total.
- Formulario de checkout con datos del comprador.
- Generación de órdenes en Firebase Firestore.
- Registro de productos, cantidades, precio total y fecha de la operación.
- Carga inicial de productos desde un archivo JSON a Firestore mediante un script.

## Tecnologías utilizadas

- **React**
- **Vite**
- **React Router**
- **Context API**
- **Firebase / Firestore**
- **JavaScript**
- **CSS**

## Estructura general

```text
src/
├── Components/     # Componentes reutilizables y del catálogo
├── Pages/          # Vistas principales de la aplicación
├── context/        # Estado global del carrito
├── firebase/       # Configuración y conexión con Firebase
├── scripts/        # Scripts auxiliares para carga de datos
└── assets/         # Recursos utilizados por la aplicación