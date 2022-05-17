import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import NavbarBoostrap from '../../components/NavbarBoostrap/NavbarBoostrap'

function Products() {
  return (
    <div>
        <NavbarBoostrap/>
        <h1>Listado de todo productos</h1>
        <ItemListContainer/>
    </div>
  )
}

export default Products