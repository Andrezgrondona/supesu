/* --------------------------- COMPONENTE DE CLASE -------------------------- */
 
 /* import React from "react"
    export default class ItemListContainer extends React.Component{
    render(){
        return(
            <div className="BannerHeader"> {this.props.greeting}</div>  
        )  
    }
}  */
/* --------------------------- COMPONENTE DE CLASE -------------------------- */


/* ------------------------- COMPONENTE DE FUNCIONAL ------------------------ */
import Itemlist from "../ItemList/ItemList";

import React from "react"
import { Container, Row } from "react-bootstrap";
import AddButton from "../AddButton/AddButton";

export default function ItemListContainer ({greeting}){
  
    return(
        <>
         <Container>
            <row>
            <div className="BannerHeader"> {greeting}</div>  
            </row>
        </Container>
        
        <Container>
            <Row>
                <Itemlist/>
                <Itemlist/>
                <Itemlist/>
                <Itemlist/>
            </Row> 
        </Container>
        <div className="ItemListContainer">
            <AddButton/>

        </div>
       
        </>
    );
}
 
/* ------------------------- COMPONENTE DE FUNCIONAL ------------------------ */

