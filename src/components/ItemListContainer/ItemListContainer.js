

/* -------------------------------- FIREBASE -------------------------------- */
import ItemList from "../ItemList/ItemList";
import {Container, Row, Col} from "react-bootstrap"
import React from "react";
import {getFirestore, getDoc,getDocs,collection, doc, query, where} from "firebase/firestore";

export default function ItemListContainer ({title, categoryId}) {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const db = getFirestore();

    if(categoryId) {
      // llamar a una coleccion con filtros
      const q = query(collection(db, "productos"), where("category_id", "==", categoryId))
      getDocs(q).then(snapshot => {
        if(snapshot.size ===0) {
          console.log("No hay productos")
        }
        setItems (snapshot.docs.map(doc =>  ({id: doc.id, ...doc.data()})));
      })
      } else{

        
        // llamar coleccion de productos
      const productsRef = collection(db, "productos");
      getDocs(productsRef).then(snapshot => {
        if(snapshot.size ===0) {
        console.log("No hay productos")
      }
      setItems (snapshot.docs.map(doc =>  ({id: doc.id, ...doc.data()})));
    })
      }
  }, [categoryId])

  return (
    <Container className="itemlist-container">
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        
        <ItemList items={items} />
      </Row>
     
    </Container>
  );
} 
/* -------------------------------- FIREBASE -------------------------------- */

/* -------------------- IMPORTAR PRODUCTOS MANERA NORMAL -------------------- */

/* import ItemList from "../ItemList/ItemList";
import {Container, Row, Col} from "react-bootstrap"
import React from "react";
import { Article } from "../../data/Productos";
export default function ItemListContainer ({title, categoryId}) {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    if(categoryId){
      setItems(Article.filter(item => item.category_id === +categoryId));
    }
    else{
      setItems(Article);
    }
  },[categoryId])
  return (
    <Container className="itemlist-container">
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        
        <ItemList items={items} />
      </Row>
     
    </Container>
  );
}  */

/* -------------------- IMPORTAR PRODUCTOS MANERA NORMAL -------------------- */