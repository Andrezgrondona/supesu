import CartIcon from "../Carticon/CartIcon";
import { Navbar, Container, Nav , row} from "react-bootstrap";
import { Link } from "react-router-dom";


export default function NavbarBoostrap(){
    return(
        <Container>
            <row>
                <Navbar bg="light" expand="lg">
                    <Container>
                            <Navbar.Brand >
                                <Link to="/">Supēsu</Link>
                            </Navbar.Brand>  
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                            <Nav.Link >
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to="/products">productos</Link>
                            </Nav.Link> 
                            <Nav.Link >
                                <Link to="/category/1">catergoria 1</Link>
                            </Nav.Link> 
                            <Nav.Link >
                                <Link to="/category/2">catergoria 2</Link>
                            </Nav.Link> 
                            
                        </Nav>
                        </Navbar.Collapse>
                        <CartIcon/>
                     </Container>
                </Navbar>
            </row>
        </Container>
    )
}