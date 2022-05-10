import AddButton from "../AddButton/AddButton"
import ItemCount from "../ItemCount/ItemCount"


import { Card} from "react-bootstrap"

export default function Item ({producto}){
    

    return(
        <Card style={{ width: '15rem' }}>
        <Card.Img src={producto.image} variant="top" />
        <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <ItemCount stock={producto.stock}/> 
            
            {/* <AddButton/>  */}
            
        </Card.Body>
        </Card>

    )
}

