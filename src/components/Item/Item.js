
import {Link, useNavigate} from "react-router-dom"
import { Card, Button } from "react-bootstrap";
import AddButton from "../AddButton/AddButton";
export default function Item({ item }) {
  const navigate = useNavigate()
  return (
    <>
    
      {/* <Card style={{ width: "18rem" }} onClick={() => navigate(`/product/${item.id}`)}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            Ver Especificaciones.....
          </Card.Text>
          <h3>$ {item.price}</h3>
        </Card.Body>
      </Card> */}

      <div className="carta">
        <ul className="ul">
          <li>
            <i className="bx bx-drink"></i>
          </li>
          <li>
            <i className="bx bx-film">$</i>
          </li>
          <li>
            <i className="bx bx-map">{item.price}</i>
          </li>
        </ul>
          <img src={item.image} alt=""/>
          <div className="con-text">
            <h2>
            {item.title}
            </h2>
            <p>
            Ver Especificaciones.....
              <button onClick={() => navigate(`/product/${item.id}`)}>
                ver mas
              </button>
            </p>
          </div>
      </div>
      </>
  );
}
