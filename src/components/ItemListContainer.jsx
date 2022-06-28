import { useEffect } from 'react';
import { useState } from 'react';
import './ItemListContainer.css';
import {listadoProductos} from '../data/asyncMock';


function ItemListContainer( props ){

    const [productos, setProductos] = useState([]);
    const [productosFetch, setProductosFetch] = useState([]);

    const getProductos = () => {
        return new Promise ((resolve, reject) => {
            
            setTimeout(()=>{
                listadoProductos.length>0?
                resolve(listadoProductos)
                :
                reject("No hay datos")
            }, 2000);
        })
    }

    useEffect(()=> {
        getProductos()
        .then(res => setProductos(res))
        .catch(err => console.log(err))
    }, [productos])

    useEffect(()=> {
        fetch('../data/data.json')
        .then(res => res.json())
        .then(data => setProductosFetch(data))
        .catch(err => console.log(err))
    }, [productos])
    
    return(
        <>
        <h1>Titulo: {props.grettings}</h1>
        </>
    )

}

export default ItemListContainer;