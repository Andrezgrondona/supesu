

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

  /* import axios from "axios"
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
 
 export default ItemDetailContainer  */

  /* ---------------------------------- AXIOS --------------------------------- */

  
import React from 'react'
import ItemList from '../ItemList/ItemList'
import {Container, Row, Col} from "react-bootstrap"
import {Article} from "../../data/Productos"
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer({title, productId}) {
  const [listaProductos, setListaProductos] = React.useState({})
  React.useEffect(()=>{
    setListaProductos(Article.find(listaProductos=>listaProductos.id===productId))
  }, [productId])
  return (
    <Container className="itemlist-container">
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <ItemDetail listaProductos ={listaProductos}/>
      </Row>


    </Container>
    
  )
}

export default ItemDetailContainer

