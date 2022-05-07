/* ------------------------------ Boostrap card ----------------------------- */

import { Card, Button } from "react-bootstrap"
export default function Itemlist (){
  
    return(
        <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card de prueba</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    )

}