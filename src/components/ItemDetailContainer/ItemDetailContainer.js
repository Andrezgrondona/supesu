

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
 import { Card} from "react-bootstrap"
 import ItemCount from "../ItemCount/ItemCount"
 
 
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
          <Card style={{ width: '15rem' }}>
            <Card.Img  variant="top" />
            <Card.Body>
                <Card.Title>{hogar.title}</Card.Title>
                
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <ItemCount /> 
                
                
                
            </Card.Body>
          </Card>

          
       </div>
   )
 }
 
 export default ItemDetailContainer 

  /* ---------------------------------- AXIOS --------------------------------- */

  


/* prueba de impresion: 
        {hogar.title} */