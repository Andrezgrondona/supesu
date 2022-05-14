
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemCount from "./components/ItemCount/ItemCount";
import NavbarBoostrap from "./components/NavbarBoostrap/NavbarBoostrap";
import Item from "./components/Item/Item";
import ItemList from "./components/ItemList/ItemList"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";





import React, {useState} from "react";


function App() {
  const [count, setCount]= useState(0);

  
  return (
    <> 
      <div className="App">
        <NavbarBoostrap />
        
        <ItemListContainer/>
        <ItemDetailContainer/>
        <ItemDetail/>
    </div>
    </> 
  );
}

export default App;




