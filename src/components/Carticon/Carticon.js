export default function CartIcon({count}){

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