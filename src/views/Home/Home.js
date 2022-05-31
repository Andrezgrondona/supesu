import React from 'react'
import NavbarBoostrap from "../../components/NavbarBoostrap/NavbarBoostrap";
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import{Container, Col, Row, Alert, Button, Form, Nav} from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom"
import DisneyApi from '../../components/DisneyApi/DisneyApi';


import banner from '../../assets/images/baner4.jpeg'
import baby from '../../assets/images/bebes.jpeg'
import Item from '../../components/Item/Item';


function Home() {
  return (
    <div className='AppRoute'>
     

      <Container>
        
        <div>
        <img className='bannerUno' src={banner}/>
        </div>
      </Container> 

     
      <Container>
        <div className='txt_succes'>
          <p >Artículos destacados de la tienda</p>
          <hr />
        </div>
      </Container>   

        
      <Container>
      <div class="parent">
        <div class="div1"></div>
        <div class="div2"> </div>
        <div class="div3"> </div>
        <div class="div4"> </div>
      </div> 
      </Container>


      <Container>
        <div className='txt_succes'>
        <Nav.Link>
            <NavLink className="ver_productos " to="/category/1">Ver productos</NavLink>
        </Nav.Link>
          <hr /> 
        </div>
      </Container> 

      
      



      <Container>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Suscribete para recibir promociones</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              
                <Button variant="primary" type="submit">
                Enviar
              </Button>
              </Form.Group>
      </Form>
      </Container>


      <ItemListContainer /> 

      <DisneyApi/>
        
    </div>
  )
}

export default Home