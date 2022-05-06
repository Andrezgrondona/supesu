
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemCount from "./components/ItemCount/ItemCount";

import React, {useState} from "react";

function App() {
  const [count, setCount]= useState(0);

  
  return (
    <> 

    <div className="App">
     <Navbar category1={"Inicio"} category2={"Productos"} category3={"Contacto"}/>
    
     <ItemListContainer greeting={"CREACIÓN DE ESPACIOS EXTRAORDINARIOS"} greeting2={"A LA MEDIDA DE TUS NECESIDADES"}/>
     
    </div>

    <ItemCount />

    

    </> /* fragment */
  );
}

export default App;
