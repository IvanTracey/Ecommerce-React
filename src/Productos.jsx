import { useParams } from 'react-router-dom'
import './Productos.css'
import '../data/productos.json'
import React, { useState, useEffect } from 'react'


const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("../data/productos.json")
        .then(res => res.json())
            .then(data => {
            setProductos(data);
            setLoading(false);
            })
        .catch((err) => {
        setError(err);
        setLoading(false);
        }); 
    }, []);

    if (loading) return <p>Cargando producos...</p>;
    if (error) return <p>Error al cargar los productos</p>;
    return (
        <div>
            <ul>
            {productos.map((productos) => (
                <li key={productos.id}>{productos.nombre}</li>
            ))}
            </ul>
        </div>
    );























































  /*
    const arrayProductos = [
        {id: 1, name: "Hamburgesas", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kKXdw3Ku/200/200/original?country=ar"},
        {id: 2, name: "Sandwich de pollo", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$k5XhSNp5/200/200/original?country=ar"},
        {id: 3, name: "Papas fritas y complementos", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kKX4MZKT/200/200/original?country=ar"},

        {id: 4, name: "Ensalada", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kGXmuT46/200/200/original?country=ar"},
        {id: 5, name: "Bebidas", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kcX2292z/200/200/original?country=ar"},
        {id: 6, name: "Postres", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kcXjLPM7/200/200/original?country=ar"}
    ];
   let productos = [];
    let productosAMostrar = [];
    fetch('../data/productos.json')
        .then(response =>response.json())
        .then(data => {
            productos = data.sort((a,b) => a.nombre.localeCompare(b.nombre));
            productosAMostrar = productos;  
            console.log(productos);
        })
        .catch(error => {
            console.log("Error");
    });

    const {id} = useParams();
    const items = id ? arrayProductos.filter(item => item.id == id) : arrayProductos;

    return (
        <div>
            <div>
                {items.map(item => (
                    <div key={item.id}>
                        <div>
                            <img src={item.imagen} alt={item.name} />
                            <div>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
  */
}

export default  Productos;

