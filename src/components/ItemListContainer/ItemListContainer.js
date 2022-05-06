 /* ----------------COMPONENTE DE CLASE---------------- */
 
 /* import React from "react"
    export default class ItemListContainer extends React.Component{
    render(){
        return(
            <div className="BannerHeader"> {this.props.greeting}</div>  
        )  
    }
}  */

/* ----------------COMPONENTE DE CLASE---------------- */


/* ----------------COMPONENTE DE FUNCIONAL---------------- */

import React from "react"

export default function ItemListContainer (){
  const [text, setText] = React.useState("CREACIÓN DE ESPACIOS EXTRAORDINARIOS")
    return(
        <div className="BannerHeader"> {text}</div>          
    );
}

/* ----------------COMPONENTE DE FUNCIONAL---------------- */
 
 
 
 
 


