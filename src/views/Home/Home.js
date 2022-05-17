import React from 'react'
import NavbarBoostrap from "../../components/NavbarBoostrap/NavbarBoostrap";
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

function Home() {
  return (
    <div className='AppRoute'>
        <NavbarBoostrap />
        <h1>hola mundo</h1>
        <ItemListContainer title="Nuestros productos"/> 
        
    </div>
  )
}

export default Home