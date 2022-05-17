

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"


export default function CartIcon(){

    const cartSize = {   
        width: "50px"  
    }
    return(
        <div className="cardWidget">
            <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />   
            </Link>
        </div>
    )
}


