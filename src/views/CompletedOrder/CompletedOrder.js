import React from 'react'
import {Col} from "react-bootstrap"
import Checkout from '../Checkout/Checkout'

function CompletedOrder({orderId, data}) {
  return (
    <Col>
        <h2> Orden Completada</h2>
        <p> Los datos de la orden son:</p>
        <ul>
            <li>Nª de orden :{orderId}</li>
            <li>nombre:{data?.name}</li>
            <li>Apellido:{data?.Apellido}</li>
            <li>Telefono:{data?.Celular}</li>
            <li>E-mail:{data?.mail}</li>
        </ul>
    </Col>
  )
}

export default CompletedOrder