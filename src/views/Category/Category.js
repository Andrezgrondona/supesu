import React from 'react'
import NavbarBoostrap from '../../components/NavbarBoostrap/NavbarBoostrap'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import{useParams} from 'react-router-dom'

function Category() {
  const {categoryId}=useParams()
  console.log(categoryId)
  return (
    <div>
        <NavbarBoostrap/>
        <h1>LIstado category</h1>
        <ItemListContainer categoryId={categoryId}/>
    </div>
  )
}

export default Category