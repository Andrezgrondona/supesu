
import {Container, Row, Col, Card} from "react-bootstrap"
import React from "react";
import AddButton from "../AddButton/AddButton";
import { CartContext } from "../../context/CartContext";


export default function ItemDetail ({item}) {
  const [count, setCount] = React.useState(0)
  const {cart} = React.useContext(CartContext)
  const {removeFromCart} = React.useContext(CartContext)
  const {deleteAll} = React.useContext(CartContext)
  const {addToCart} = React.useContext(CartContext)
  const {countItems} = React.useContext(CartContext)
  const {isInCart} = React.useContext(CartContext)

  return (
    <Card className="item-detail">
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <h3>$ {item.price}</h3>
        {isInCart(item.id) ? (
          <button>Ir al carrito</button>
        ) : (
          <AddButton
            onSubmit={() => addToCart(item, count)}
            count={count}
            setCount={setCount}
            stock={item.stock}
          />
        )}
      </Card.Body>
    </Card>
     
  );
}