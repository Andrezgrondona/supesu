import CartIcon from "../Carticon/CartIcon";
import { Navbar, Container, Nav , row} from "react-bootstrap";


export default function NavbarBoostrap(){
    return(
        <Container>
            <row>
                <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Supēsu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>  
                        
                    </Nav>
                    
                    </Navbar.Collapse>
                    <CartIcon/>
                </Container>
            </Navbar>
            </row>
        </Container>
    )
}