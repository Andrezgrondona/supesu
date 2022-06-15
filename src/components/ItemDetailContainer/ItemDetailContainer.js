

/* -------------------------------- FIREBASE -------------------------------- */

 import {Container, Row, Col} from "react-bootstrap"
import React from "react";
import { Article } from "../../data/Productos";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
export default function ItemDetailContainer ({ title, productId }) {
  const [item, setItem] = React.useState({});
  React.useEffect(() => {
    const db = getFirestore();
    // llamar a un documento
    const productRef= doc(db, "productos", productId)
    getDoc(productRef).then(snapshot => {
      if(snapshot.exists()) {
        setItem({id: snapshot.id, ...snapshot.data()})
      }
    })
   
  }, [productId]);
  return (
    <Container className="itemlist-container">
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <ItemDetail item={item} />
      </Row>
    </Container>
  );
} 
/* -------------------------------- FIREBASE -------------------------------- */
/* ----------------------------- DETALLE NORMAL ----------------------------- */

 /* import {Container, Row, Col} from "react-bootstrap"
import React from "react";
import { Article } from "../../data/Productos";
import ItemDetail from "../ItemDetail/ItemDetail";
export default function ItemDetailContainer ({ title, productId }) {
  const [item, setItem] = React.useState({});
  React.useEffect(() => {
    setItem(Article.find(item => item.id === productId));
  }, [productId]);
  return (
    <Container className="itemlist-container">
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <ItemDetail item={item} />
      </Row>
    </Container>
  );
}  
/* ----------------------------- DETALLE NORMAL ----------------------------- */

