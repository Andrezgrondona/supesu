import ItemCount from '../ItemCount/ItemCount'
import { Container, Row, Col, Card } from 'react-bootstrap'
import React from 'react'
import Item from '../Item/Item'





function ItemDetail({producto}) {
  return (
    <Card >
        <Card.Img variant="top" src={producto.image}/>
        <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <ItemCount stock={producto.stock}/> 
            
            {/* <AddButton/>  */}
            
        </Card.Body>
        </Card>
  )
}

export default ItemDetail