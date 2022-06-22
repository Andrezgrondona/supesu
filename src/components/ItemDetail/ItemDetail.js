
import React from "react"
import {Container, Row, Col, Card, Button} from "react-bootstrap"
import AddButton from "../AddButton/AddButton";
import { CartContext } from "../../context/CartContext";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'

export default function ItemDetail ({item}) {
              
  const { addToCart, isInCart } = React.useContext(CartContext);
  const [count, setCount] = React.useState(1)
  return (
<>

<Container>
<div className="wrapper">
        <div class="product-img">
          <img src={item.image} height="420" width="327"/>
        </div>
        <div className="product-info">
          <div className="product-text">
          <h1>{item.title}</h1>
          <h1 className="txt_price">${item.price}</h1>
          <h2>{item.detail}</h2>
        </div>

        <div className="product-price-btn">
          <div className="product-text">
              {isInCart(item.id) ? (
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
          </div>
        </div> 
      </div> 
  </div>  
</Container>
  </>
  )
} 

