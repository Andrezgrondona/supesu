 import React from "react";
import Item from "../Item/Item";



const ItemList =({listaProductos}) =>{
    return(
        <div>
            <>
                <h3>Lista de productos</h3>

                <div style={{display:'flex', justifyContent:'space-between',flexWrap:'wrap',alignItems:'center'}}>
                {listaProductos.map((producto)=> <Item producto={producto} key={producto.id}/>)}
                {/* producto es generico  */}
                </div>
                
        
            </>
            
            
        </div>
    )
}

export default ItemList
 

