import React from "react"

const CartContext = React.createContext();
const {Provider} = CartContext

const CartProvider = ({children}) => {
  const [cart, setCart] = React.useState([])

  /* --------------------------------- Agregar -------------------------------- */

  const addToCart = (item, count) => {
    if(isInCart(item.id)) {
      const newCart = cart.map(cartItem => {
        if(cartItem.id === item.id) {
          cartItem.quantity++
        }
        return cartItem
      })
      setCart(newCart)
    }
    else {
      setCart([...cart, {...item, quantity: +count}])
    }
  }

   /* --------------------------------- Remover -------------------------------- */

                /* ------------- SACAR TODOS LOS ITEMS ----------- */
   const removeFromCart = (id) => {
    const newCart = cart.filter((carItem) => carItem.id !== id);
    setCart(newCart)              
  }
                /* ------------- SACAR TODOS LOS ITEMS ----------- */

                /* ------------- SACAR ITEM POR ITEM ----------- */
    /* const removeFromCart = (item, count) => {
      if(isInCart(item.id)) {
        const newCart = cart.map(cartItem => {
          if(cartItem.id === item.id) {
            cartItem.quantity--
          }
          return cartItem
        })
        setCart(newCart)
      }
      else {
        setCart([...cart, {...item, quantity: -count}])
      }
    } */

                 /* ------------- SACAR ITEM POR ITEM ----------- */







  /* --------------------------------- Borrar --------------------------------- */
  const deleteAll = () => {
    setCart([])
  }
  /* ------------------------------ En el carrito ----------------------------- */
  const isInCart = (id) => {
    return cart.find(item => item.id === id)
  }


  return (
    <Provider value={{
      addToCart,
      removeFromCart,
      deleteAll,
      isInCart,
      cart,
    }}>{children}</Provider>
  )
}

export {CartContext, CartProvider}