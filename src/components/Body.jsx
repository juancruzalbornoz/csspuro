import React, { useEffect } from 'react';
import { useState } from 'react';
import './Body.css';
import Card from './Card';

function Body(){

    const [info, setInfo] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then((res) => res.json())
        .then((data) => setInfo(data))
    }, [])

    return(
        <section className='catalogo'>
            <div>
                <h2>Catalogo</h2>
                <p>Elegi tus productos</p>
            </div>
            <div className='cuerpo'>
                {/* <Card product='Mesa' price='$1000' /> */}
                { info && info.map(i => <Card product={i.nombre} price={i.precio} />) }
            </div>
            
        </section>
    )

}

export default Body;

