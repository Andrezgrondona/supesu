import ListadoN from "../ListadoN/ListadoN";
import NavBarList from "../NavBarList/NavBarList";
/* ------------------------------------ NavbarBoostrap ----------------------------------- */
import CartIcon from "../Carticon/CartIcon"
import {Navbar, Container, Nav} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom"



export default function NavbarBoostrap ({props}) {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" >Supēsu</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink to="/">
                  Inicio
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/products">
                  Productos
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/category/1">
                  Muebles
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/category/2">
                  Decoracion
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/category/2">

                   <NavBarList />

                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartIcon /> 
        </Container>
      </Navbar>
    </header>
  );
}

/* lista N44 item importado lista filtrada */