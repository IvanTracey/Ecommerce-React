const admin = require("firebase-admin");
const fs = require("fs");

// Credenciales de Firebase
const serviceAccount = require("./serviceAccountKey.json");

// Inicializar Firebase Admin
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Obtener Firestore
const db = admin.firestore();

// Leer el JSON
const datos = fs.readFileSync("./data/productos.json", "utf-8");

const productos = JSON.parse(datos);

// Recorrer los productos
const importarProductos = async () => {
    for (const producto of productos) {
        // Crear una referencia con ID automático
        const referencia = db.collection("productos").doc();
        // Guardar el producto
        await referencia.set(producto);
        console.log(`Producto cargado: ${producto.nombre} - ID: ${referencia.id}`);
    }
    console.log("Carga finalizada.");
};

// Ejecutar
importarProductos();