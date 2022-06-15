import React from 'react'
import {doc, updateDoc, addDoc, collection, getFirestore } from "firebase/firestore"
import {CartContext} from '../../context/CartContext'
import {Alert, Col,Card,Button,Row,Container} from 'react-bootstrap'

import Cart from '../Cart/Cart'

function Checkout() {
    const {cart} = React.useContext(CartContext)
    const {removeFromCart} = React.useContext(CartContext)
    const [data, setData] = React.useState([])
    const [orderId, setOrderId] = React.useState()
    const handleChange=(event) =>{
        const {name, value} = event.target
        setData({...data, [name]:value})
    }

   
    const handleSubmit=(event) =>{
        event.preventDefault()  
            const order = {
            buyer:data,
            items:cart
        }
        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        const productsCollection = collection(db, "productos")
          addDoc (orderCollection, order).then(({id})=>{
            setOrderId(id)
            /* alert(id) */

            const productDoc = doc(db, "productos", "MDA73Xy1i0eMewvYB3tS")
            updateDoc(productDoc, {stock:6})
        })
    }

  
  return (
  <>
  
  <div className='form'>
        <form onSubmit={handleSubmit}>
            <h1>Checkout</h1>
            <input
                type="text"
                name="name"
                place="name"
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                place="Email"
                onChange={handleChange}
            />

            <input
                type="phone"
                name="phone"
                place="phone"
                onChange={handleChange}
            />

            <input
                type="submit"
                value="enviar"
            />
        </form>
    </div>


    <Container>
                    {cart.map((cartItem) => {
                        return(
                            <>
                                <Row>
                                <Card >
                                    <Row>
                                        <Col md={{ span: 2 }}>
                                            <Card.Img variant="top" src={cartItem.image}/>
                                        </Col>
                                        <Col md={{ span: 2}}>
                                            <p>{cartItem.title}</p>
                                        </Col>
                                        <Col md={{ span: 2 }}>
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
    </>
  )
}

export default Checkout