import React from 'react'
import {doc, updateDoc, addDoc, collection, getFirestore } from "firebase/firestore"

import Cart from '../Cart/Cart'

function Checkout() {
    const [data, setData] = React.useState([])
    const [orderId, setOrderId] = React.useState()
    const handleChange=(event) =>{
        const {name, value} = event.target
        setData({...data, [name]:value})
    }

    const cart =[
        {
            id:1,
            title:"Product 1",
            price:10,
            quantity:1
        },
        {
            id:2,
            title:"Product 2",
            price:20,
            quantity:2
        },
    ]

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
  )
}

export default Checkout