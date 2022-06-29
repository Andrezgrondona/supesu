import React from 'react'
import {doc, updateDoc, addDoc, collection, getFirestore, Timestamp } from "firebase/firestore"
import {CartContext} from '../../context/CartContext'
import {Alert, Col,Card,Button,Row,Container} from 'react-bootstrap'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'
import CompletedOrder from '../CompletedOrder/CompletedOrder'



function Checkout() {
    const {cart} = React.useContext(CartContext)
    const {removeFromCart} = React.useContext(CartContext)
    const [data, setData] = React.useState([])
    const [orderId, setOrderId] = React.useState()
    const handleChange=(event) =>{
        const {name, value} = event.target
        setData({...data, [name]:value})
    }

    const {deleteAll} = React.useContext(CartContext)

   
    const handleSubmit=(event) =>{
        event.preventDefault()  
            const order = {
            buyer:data,
            items:cart,
            status:"Generada",
            date:Timestamp.fromDate( new Date)
           
        }
        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        const productsCollection = collection(db, "productos")
          addDoc (orderCollection, order).then(({id})=>{
            setOrderId(id)
             /* alert(id)  */
             /* alert("Tu orden es"+" "+id +""+"Dale click al boton Finalizar...Gracias" ) */
             alert("Tu orden se ha generado correcctamente, Dale click en Finalizar para terminar tu compra"   )

           /*  const productDoc = doc(db, "productos", "MDA73Xy1i0eMewvYB3tS")
            updateDoc(productDoc, {stock:6}) */
        })
    }
  return (
  <>
  

  {/* {isInCart(item.id) ? (
                <Link to={`/cart`} >
                  <button>Ir al carrito </button>
                </Link> 
            ) : (
              <AddButton
                onSubmit={() => addToCart(item, count)}
                count={count}
                setCount={setCount}
                stock={item.stock}
              />
            )}
  */}


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
            <input type="text" class="inputbox" name="mail" onChange={handleChange} required />

            <p>Confirmar E-mail</p>
            <input type="text" class="inputbox" name="mail" onChange={handleChange} required />

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

              <button type="submit" class="button">CheckOut</button>
           
            <div>
                <CompletedOrder orderId={orderId} data={data}/>
                <Link to="/Home" > 
                 {/* <Button variant="success" >Finalizar</Button> */}
                 <Button variant="success" onClick={ ()=>deleteAll()} >Finalizar</Button>
                </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Container>
    </>
  )
}

export default Checkout