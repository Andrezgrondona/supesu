
/* ------------------------ filtro category prueba 1 ------------------------ */
   
import React, { useEffect, useState } from "react"
import Item from "../Item/Item"
import {Article} from "../../data/Productos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Products from "../../views/Products/Products"



function ItemListContainer ({saludo, categoryId}) {

 const [listaProductos, setListaProductos]=useState([])
 const [cargando, setCargando] = useState(false)

 React.useEffect(()=>{
     if(categoryId){
        listaProductos=(Article.filter(Art_filtrados => Art_filtrados.category_id === +categoryId)) 
     }
     else{
        setListaProductos(Article)
     }
   
 },[categoryId])


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
//console.log(listaProductos)
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
            
             <ItemList listaProductos={listaProductos}/>
           
        </div>
     
    )
}
export default ItemListContainer

/* ------------------------ filtro category prueba 1 ------------------------ */


/* ------------------------ filtro category prueba 2 ------------------------ */
   
/* import React, { useEffect, useState } from "react"
import Item from "../Item/Item"
import {Article} from "../../data/Productos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Products from "../../views/Products/Products"



function ItemListContainer ({saludo}) {
 const {categoryId}=useParams()
 const [listaProductos, setListaProductos]=useState([])
 const [cargando, setCargando] = useState(false)

 React.useEffect(()=>{
    //setListaProductos(Article.filter(item => item.category_id===+categoryId)) 
 },[categoryId])


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
//console.log(listaProductos)
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
            
            {cargando ? <p>cargando...</p> : <ItemList listaProductos={Article.filter(Art_filtrados => Art_filtrados.category_id===+categoryId)}/>}
           
        </div>
     
    )
}
export default ItemListContainer */

/* ------------------------ filtro category prueba 2 ------------------------ */
   
/* ----------------------------- filtro normal ---------------------------- */

/* import React, { useEffect, useState } from "react"
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
 console.log(listaProductos) 
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
            
            
        </div>
     
    )
}
export default Listado
 */


/* ----------------------------- filtro normal ---------------------------- */

