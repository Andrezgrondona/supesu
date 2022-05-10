
/* -------------------------------- promesas -------------------------------- */
   
import React, { useEffect, useState } from "react"
import Item from "../Item/Item"
import {Article} from "../../data/Productos"
import ItemList from "../ItemList/ItemList"


const Listado = ({saludo}) => {
 const [listaProductos, setListaProductos]=useState([])
 const [cargando, setCargando] = useState(false)


 const traerProd = new Promise ((resolve, reject)=>{
     let condition = true
     setTimeout(()=>{
         if (condition){
             resolve(Article)
         }else{
             reject('salio mal ')
         }

     },3000)
 })

 useEffect(()=>{
     
     setCargando(true)
     traerProd
     .then((res)=> setListaProductos(res))
     .catch((error)=>console.log(error))
     .finally(()=> setCargando(false))

 },[])

 

    return(
        <div>
            <h1>{saludo}</h1>
            {cargando ? <p>cargando...</p> : <ItemList listaProductos={listaProductos}/>}
            {/* rendering condicional */}
            
        </div>
     
    )
}

export default Listado

   
      