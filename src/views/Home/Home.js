import React from 'react'
import NavbarBoostrap from "../../components/NavbarBoostrap/NavbarBoostrap";
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

function Home() {
  return (
    <div className='AppRoute'>
      <NavbarBoostrap/>
        
        <ItemListContainer title="Lo mejor para tus espacios!"/> 
        
    </div>
  )
}

export default Home