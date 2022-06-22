

import React from 'react'
import {CartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom'
import {Alert, Col,Card,Button,Row,Container} from 'react-bootstrap'
import Checkout from '../Checkout/Checkout'

import NumberFormat from 'react-number-format'

function Cart() {
  const {cart} = React.useContext(CartContext)
  const {removeFromCart} = React.useContext(CartContext)
  const {deleteAll} = React.useContext(CartContext)
  const {addToCart} = React.useContext(CartContext)
  const {countItems} = React.useContext(CartContext)
  const { getCartTotal } =  React.useContext(CartContext);

  
  return (
    <>

<div>
                {!(cart.length > 0) ?                 
                (<>
                    <Container>
                        <Row  className="text-center">
                            <h1>No tienes items en tu carrito</h1>
                            <Link to={`/`} >
                                <Button variant="primary" >Volver a la tienda </Button>
                            </Link>
                        </Row>
                    </Container>
                </>):
                (
                    <>
                        <h1 className='txt_item_card'>Tienes {countItems()} Elementos en tu carrito</h1>                        
                        <Container>
                            {cart.map((cartItem) => {
                                return(
                                    <>
                                        <Row key={cartItem.id}>
                                        <Card >
                                            <Row>
                                                <Col md={{ span: 2 }}>
                                                    <Card.Img  variant="top" src={cartItem.image} />
                                                </Col>
                                                <Col md={{ span: 2 }}>
                                                    <p className='txt_cart_title'>{cartItem.title}</p>
                                                </Col>
                                                <Col md={{ span: 2 }}>
                                                    <p className='txt_cart_title2'>Cantidad:</p>
                                                    <p className='txt_cart_title2'>{cartItem.quantity}</p>                                                        
                                                </Col>
                                                <Col md={{ span: 2 }}>
                                                    <p className='txt_cart_title2'>Precio:</p>
                                                    <p className='txt_cart_title2'>{cartItem.price}</p>                                                      
                                                </Col>
                                                <Col md={{ span: 1 }}>
                                                    <p className='txt_cart_title2'>Total:</p>
                                                    <p className='txt_cart_title2'>{cartItem.quantity*cartItem.price}</p> 
                                                   
                                                </Col>
                                                <Col md={{ span: 3 }}>
                                                    <Button className='btnRemove' variant="primary" onClick={ ()=>removeFromCart(cartItem.id)}>Eliminar del Carrito </Button>                                                
                                                </Col>
                                            </Row>                                            
                                        </Card>
                                        </Row>                                        
                                    </>
                                )                
                            })}
                            <Row >
                                <Card >
                                    <Row>
                                        <Col md={{ span: 4 , offset: 8  }}>
                                            <p>Total: <b><NumberFormat value={getCartTotal()} displayType={'text'}   thousandSeparator={'.'} decimalSeparator={" "} prefix={'$'} /></b></p>
                                        </Col>                                        
                                    </Row>                                            
                                </Card>
                            </Row>
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
                                <Link to="/checkout" >
                                
                                    <Button variant="success" >Ir a pagar </Button> 
                                </Link>
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







  