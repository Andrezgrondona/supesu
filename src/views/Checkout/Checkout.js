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
             /* alert(id)  */
             alert("Tu pedido se ha realizado con éxito, tu numero de confirmacion es"+" "+id)

           /*  const productDoc = doc(db, "productos", "MDA73Xy1i0eMewvYB3tS")
            updateDoc(productDoc, {stock:6}) */
        })
    }

  
  return (
  <>
  
<Container>
     <div class="mainscreen">
      <div class="card2">
        <div class="fondoForm">
          <form onSubmit={handleSubmit}>
            <h1>CheckOut</h1>
            <h2>Informacion de pago</h2>
            <p>Nombre</p>
            <input type="text" class="inputbox" name="name" onChange={handleChange} required />

            <p>Apellido</p>
            <input type="text" class="inputbox" name="Apellido" onChange={handleChange} required />

            <p>E-mail</p>
            <input type="text" class="inputbox" name="E-mail" onChange={handleChange} required />

            <p>Celular</p>
            <input type="text" class="inputbox" name="Celular" onChange={handleChange} required />

            <p>Drireccion</p>
            <input type="text" class="inputbox" name="Direccion" onChange={handleChange} required />
           

            <p>Tipo de pago</p>
            <select class="inputbox" name="Tipo de Pago" id="card_type" onChange={handleChange} required>
              <option value="">--Selecciona una opcion--</option>
              <option value="Efectivo" >Efectivo</option>
              <option value="PSE" >PSE</option>
              <option value="ContraEntrega" >Contra Entrega</option>
            </select>

            <p></p>
            <button type="submit" class="button">CheckOut</button>
          </form>
        </div>
      </div>
    </div>
    </Container>
    </>
  )
}

export default Checkout