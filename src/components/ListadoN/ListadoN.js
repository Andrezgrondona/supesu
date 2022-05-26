import React from 'react'

const ListadoN = (props) => {
  return (
    <div>
        <div>{props.name}</div>
        <div>{props.productos}</div>
        <div>{props.decoracion}</div>
    </div>
  )
}

export default ListadoN