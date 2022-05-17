import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, Container, Row, Col } from 'react-bootstrap'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer'
import NavbarBoostrap from '../../components/NavbarBoostrap/NavbarBoostrap'

function Product() {
  const{productId} = useParams()
  return (

<Card>
  <Card.Body>This is some text within a card body.</Card.Body>
  <ItemDetailContainer title="mis productos(listado)" productId={+productId}/>
</Card>
  
  )
}

export default Product

