
import Item from "./components/ItemListContainer/Item";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
     <Navbar category1={"Inicio"} category2={"Productos"} category3={"Contacto"}/>
    
     <Item greeting={"CREACIÓN DE ESPACIOS EXTRAORDINARIOS"} greeting2={"A LA MEDIDA DE TUS NECESIDADES"}/>
     
    </div>
 
  );
}

export default App;
