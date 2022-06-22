import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import{Container, Nav} from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom"
import banner from '../../assets/images/baner4.jpeg'

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
          <p  className='fraseUno'>Tendencias en decoracion</p>
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
          
        <div className='frase'>
              El gran diseño es una relación multidimensional entre la vida humana y el entorno. — Naoto Fukasawa
        </div>
     
      </Container>
      <ItemListContainer /> 

  
        
    </div>
  )
}

export default Home
 

