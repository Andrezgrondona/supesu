import React, {useState} from 'react'
import NavbarBoostrap from '../NavbarBoostrap/NavbarBoostrap'
import ListadoN from '../ListadoN/ListadoN'



const NavBarList = () => {
    const [nvList, setNvlist] = useState([
        {
            id:1,
            name:'Supēsu',
            productos:"productos",
            muebles:"muebles",
            decoracion:"Decoracion"
        }, 
    ])
  return (
    <div>
        {nvList.map((listaFiltrada)=>{
                return <>
                
                <ListadoN key={listaFiltrada.id} name = {listaFiltrada.name} />
                    <ListadoN key={listaFiltrada.id} productos={listaFiltrada.productos}/>
                 
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