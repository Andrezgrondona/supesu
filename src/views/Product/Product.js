import React from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"
import NavbarBoostrap from "../../components/NavbarBoostrap/NavbarBoostrap"
export default function Product ({}) {
  const {productId} = useParams()
  return(
    <Container>
      <Row>
        <Col>
          <NavbarBoostrap/>
          <ItemDetailContainer title="Mi producto" productId={+productId}/>
        </Col>
      </Row>
    </Container>
  )
}
