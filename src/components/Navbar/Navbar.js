export default function Navbar (){

    const marginLogo = {
        margin: "20px"
        
    }
    
    return(
        <header className="header">
            <div className="logo"  style={marginLogo}>Supēsu</div>
            <ul className="links">
                <li className="link">Inicio</li>
                <li className="link">Productos</li>
                <li className="link">Contacto</li>
            </ul>
        </header>
    );
}