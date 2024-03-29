import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home/Home"
import Cart from "./views/Cart/Cart"
import Products from "./views/Products/Products"
import Category from "./views/Category/Category"
import Product from "./views/Product/Product"
import CompletedOrder from "./views/CompletedOrder/CompletedOrder"


/* --------------------------------- Context -------------------------------- */
import{CartProvider} from "./context/CartContext"
import NavbarBoostrap from "./components/NavbarBoostrap/NavbarBoostrap"
import Checkout from "./views/Checkout/Checkout"
/* --------------------------------- Context -------------------------------- */

function App() {
  return (
      <BrowserRouter>
      <CartProvider>
        <NavbarBoostrap/>
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route exact path="/category/:categoryId" element={<Category />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout/>} />
          <Route exact path="/CompleteOrder" element={<CompletedOrder/>} />
        </Routes>
      </CartProvider>
      </BrowserRouter>
  );
}

export default App;