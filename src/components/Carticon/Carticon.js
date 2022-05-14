

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export default function CartIcon(){

    const cartSize = {   
        width: "50px"  
    }
    return(
        <div className="cardWidget">
            <FontAwesomeIcon icon={faShoppingCart} />
        </div>
    )
}


