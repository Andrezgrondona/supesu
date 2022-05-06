import CartIcon from "../Carticon/CartIcon";

/* modo prueba Desafío: Contador con botón */
import ItemCount from "../ItemCount/ItemCount";
/* modo prueba Desafío: Contador con botón */

export default function Navbar ({category1,category2,category3}){
    const marginLogo = {
        margin: "20px"   
    }
    
    return(
        <header className="header">
            <div className="logo"  style={marginLogo}>Supēsu</div>
            <ul className="links">
                <li className="nav-item">
                    <a className="link" href="#">{category1}</a>
                </li>
                <li className="nav-item">
                    <a className="link" href="#">{category2}</a>
                </li>
                <li className="nav-item">
                    <a className="link" href="#">{category3}</a>
                </li>
                <CartIcon/>
                <ItemCount/>
            </ul>
            
        </header>
    );
}