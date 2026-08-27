// correr el codigo una vez desde la terminal para cargar los productos con: 
// npm run importar-productos

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfigure";
import productos from "../../data/productos.json";

export const importarProductos = async () => {
    try {
        for (const producto of productos) {
            await addDoc(
                collection(db, "productos"),
                producto
            );
        }
        console.log("✅ Productos cargados");
    } catch (error) {
        console.error("Error:", error);
    }
};