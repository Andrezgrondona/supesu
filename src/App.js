
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemCount from "./components/ItemCount/ItemCount";
import NavbarBoostrap from "./components/NavbarBoostrap/NavbarBoostrap";
import Itemlist from "./components/ItemList/ItemList";



import React, {useState} from "react";


function App() {
  const [count, setCount]= useState(0);

  
  return (
    <> 

    <div className="App">
     {/* <Navbar category1={"Inicio"} category2={"Productos"} category3={"Contacto"}/> */}
     <NavbarBoostrap />
     <ItemListContainer greeting={"CREACIÓN DE ESPACIOS EXTRAORDINARIOS"} greeting2={"A LA MEDIDA DE TUS NECESIDADES"}/>
     {/* <Itemlist /> */}
     
     
     
    </div>

    <ItemCount />

    

    </> /* fragment */
  );
}

export default App;




