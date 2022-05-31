import React, {useState} from 'react'
import NavbarBoostrap from '../NavbarBoostrap/NavbarBoostrap'
import ListadoN from '../ListadoN/ListadoN'



const NavBarList = () => {
    const [nvList, setNvlist] = useState([
        {
            id:1,
            name:'Supēsu',
        }, 
        {
            id:2,
            name:'productos',
        }, 
        {
            id:3,
            name:'muebles',
        }, 
        {
            id:4,
            name:'decoracion',
        }, 

    ])
  return (
    <div>
        
        {nvList.map((listaFiltrada)=>{
                return <>
                <ListadoN key={listaFiltrada.id} name = {listaFiltrada.name} />
                </>   
        })} 
    </div>
  )
}

export default NavBarList



{/* <div>
        {nvList.map((nvList)=>{
            return <NavbarBoostrap name = {NavbarBoostrap.name}/>
        })}
    </div> */}