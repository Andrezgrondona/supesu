

 /* -------------------------------- fetch-------------------------------- */

/*  import React, {useEffect, useState} from 'react'
 
 
 const ItemDetailContainer = () => {
    const [paises, setPaises] = useState()
    const [print, setPrint] = useState (false)
     
     useEffect(()=>{
         
         fetch("https://api.mercadolibre.com/sites")
         .then((res)=>res.json())
         .then((infoApi)=>console.log(infoApi))
         .catch((err)=>console.log(err))
         .finally (()=> setPrint(true))
         
     },[])
   return (
     <div>
       <h1>hola</h1>
     </div>
   )
 }
 
 export default ItemDetailContainer  */
 
 /* -------------------------------- fetch-------------------------------- */

 /* ---------------------------------- AXIOS --------------------------------- */

  import axios from "axios"
 import React from 'react'
 
 
 const ItemDetailContainer = () => {
   
   const [hogar, setHogar] = React.useState([])

   React.useEffect(()=>{
     axios
     .get("https://api.mercadolibre.com/sites/MLA/search?q=hogar")
     .then((response) => setHogar(response.data.results[4]))
     .catch((err) => console.error(err))

   },[])
   console.log(hogar)
   return (
        <div>
          prueba de impresion: 
        {hogar.title}
       </div>
   )
 }
 
 export default ItemDetailContainer 

  /* ---------------------------------- AXIOS --------------------------------- */

 


