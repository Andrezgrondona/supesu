
/* ------------------------------- prueba 1 ------------------------------ */
/* import React, { useEffect, useState } from 'react'

export const DisneyApi = () => {
    const [disney, setDisney] = useState([])
    useEffect(()=> {
        obtenerDatos()
    },[])

    const obtenerDatos = async () => {
        const data = await fetch ("https://api.disneyapi.dev/characters")
        const users = await data.json()
        setDisney(users)
    }
  return (
    <div>
        prueba a imprimir
        <ul>
            {disney.map(item=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul> 
    </div>
  )
}

export default DisneyApi */
/* ------------------------------- prueba 1 ------------------------------ */


/* -------------------------------- prueba 2 -------------------------------- */

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


export const DisneyApi = () => {
    const [disney, setDisney] = React.useState([]);

    React.useEffect(() => {
        axios
        .get("https://api.disneyapi.dev/characters/")
        .then((res) => setDisney(res.data))
        .catch(err => console.log(err));
    }, []);
    console.log(disney);
  return (
    <div>
    prueba a imprimir
    {/* <ul>
        {disney.map(item=>(
            <li key={item.id}>{item.name}</li>
        ))}
    </ul>  */}
</div>
  )
}

export default DisneyApi; 

/* -------------------------------- prueba 2 -------------------------------- */
/* -------------------------------- prueba 3-------------------------------- */

/* import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


export const DisneyApi = () => {
    const [disney, setDisney] = useState([]);

    useEffect(() => {
        const getDisney = async () => {

            const url ="https://api.disneyapi.dev/characters"
            const result = await axios.get(url);

            //console.log(result.data);
            setDisney(result.data);

        };  
        getDisney();
    }, []);
  return (
    <div>
        hola
       
    </div>
  )
}

export default DisneyApi; */
 /* -------------------------------- prueba 3 -------------------------------- */