

import React from 'react'
import {CartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom'
import {Alert, Col,Card,Button,Row,Container} from 'react-bootstrap'

function Cart() {
  const {cart} = React.useContext(CartContext)
  const {removeFromCart} = React.useContext(CartContext)
  const {deleteAll} = React.useContext(CartContext)
  const {addToCart} = React.useContext(CartContext)
  const {countItems} = React.useContext(CartContext)
  return (
    <>

<div>
        
        {!(cart.length > 0) ?                 
        (<>

        <div>
          <>
            {['primary',].map((variant) => (
              <Container>
                <Row>
                <Alert key={variant} variant={variant}>
                  No tienes productos en el carrito
                  <Link to={`/`} >
                          <Button variant="primary" >Volver a la tienda </Button>
                      </Link>
                </Alert>
                </Row>
              </Container>  
            ))}
          </>
        </div>    
        </>):
        (
            <>
                                        
                <Container>
                <h1 className='titulo_cart'>Tienes {countItems()} elementos en tu carrito</h1>

                </Container>
                
                <Container>
                    {cart.map((cartItem) => {
                        return(
                            <>
                                <Row>
                                <Card >
                                    <Row>
                                        <Col md={{ span: 3 }}>
                                            <Card.Img variant="top" src={cartItem.image}/>
                                        </Col>
                                        <Col md={{ span: 3 }}>
                                            <p>{cartItem.title}</p>
                                        </Col>
                                        <Col md={{ span: 3 }}>
                                            <p>Cantidad:</p>
                                            <p>{cartItem.quantity}</p>                                                        
                                        </Col>
                                        <Col md={{ span: 3 }}>
                                            <Button variant="primary" onClick={ ()=>removeFromCart(cartItem.id)}>Eliminar del carrito </Button>                                                
                                        </Col>
                                    </Row>                                            
                                </Card>
                                </Row>                                        
                            </>
                        )                
                    })}

                </Container>
                <Row className="text-center">
                    <Col md={{ span: 4 }}>
                        <Link to={`/`} >
                            <Button variant="primary" >Volver a la tienda </Button>
                        </Link>
                    </Col>
                    <Col md={{ span: 4 }}>
                        <Button variant="secondary" onClick={ ()=>deleteAll()} >Limpiar Carrito </Button>
                    </Col>
                    <Col md={{ span: 4 }}>
                        <Button variant="success" >Ir a pagar </Button>
                    </Col>
                </Row>                        
            </>                
        )
         }

    </div>
    
    
</>
  )
}

export default Cart







  