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

export default function ItemListContainer ({greeting}){
  
    return(
        <>
        <div className="BannerHeader"> {greeting}</div>  
        
        <Container>
            <Row>
                <Itemlist/>
                <Itemlist/>
                <Itemlist/>
                <Itemlist/>
            </Row>
            
        </Container>
        </>
    );
}
 
/* ------------------------- COMPONENTE DE FUNCIONAL ------------------------ */

