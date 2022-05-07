/* export default function CartIcon({count}){

    const cartSize = {   
        width: "50px"  
    }
    return(
        <div>
            <img src="img/cart.jpg" alt="carritoImg" style={cartSize}/>
            {count}
        </div>
    )
}
 */

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


