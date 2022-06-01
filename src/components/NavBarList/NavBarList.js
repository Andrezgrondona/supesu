import React, {useState} from 'react'
import NavbarBoostrap from '../NavbarBoostrap/NavbarBoostrap'
import ListadoN from '../ListadoN/ListadoN'
import { Nav, NavLink } from 'react-bootstrap'



const NavBarList = () => {
    const [nvList, setNvlist] = useState([
        {
            id:1,
            name:'Supēsu',
            nav:'/'  
        }, 
        {
            id:2,
            name:'productos',
            nav:"/products"   
        }, 
        {
            id:3,
            name:'muebles',
            nav:"/category/1"   
        }, 
        {
            id:4,
            name:'decoracion',
            nav:"/category/2"
        }, 

    ])
  return (
    <>
        
        {nvList.map((listaFiltrada)=>{
                return <>
                    <Nav.Link>
                        <NavLink to={listaFiltrada.nav}>
                            <ListadoN key={listaFiltrada.id} name = {listaFiltrada.name}/>  
                        </NavLink>
                    </Nav.Link>
                </>   
        })} 
    </>
  )
}

export default NavBarList

            

