
import {Link, useNavigate} from "react-router-dom"
import { Card, Button } from "react-bootstrap";
import AddButton from "../AddButton/AddButton";
import ItemCount from "../ItemCount/ItemCount";
export default function Item({ item, onAdd }) {
  const navigate = useNavigate()
  return (
    <>
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
