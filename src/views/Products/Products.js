
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import NavbarBoostrap from "../../components/NavbarBoostrap/NavbarBoostrap";

export default function Products() {
  return (
    <div>
      <NavbarBoostrap/>
      <h1>Todo para el hogar!</h1>
      <ItemListContainer />
    </div>
  );
}