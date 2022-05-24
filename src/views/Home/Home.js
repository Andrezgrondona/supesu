import React from 'react'
import NavbarBoostrap from "../../components/NavbarBoostrap/NavbarBoostrap";
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import{Container, Col, Row} from 'react-bootstrap'

import banner from '../../assets/images/baner4.jpeg'

function Home() {
  return (
    <div className='AppRoute'>
      <NavbarBoostrap/>

      <Container className='fondoBaner'>
        <div>
        <img className='bannerUno' src={banner}/>
        </div>
      </Container>  

      <Container>
        <div className='babyBed'>
          <div className='imgBaby'></div>
          <div className='txtBabyBed'></div>

        </div>
      </Container>

      <Container>
      <div class="parent">
        <div class="div1"> </div>
        <div class="div2"> </div>
        <div class="div3"> </div>
        <div class="div4"> </div>
      </div> 
      </Container>


      <ItemListContainer /> 
        
    </div>
  )
}

export default Home