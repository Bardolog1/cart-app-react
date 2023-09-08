import { Navigate, Route, Routes } from "react-router-dom";
import ProductsView from "../Components/ProductsView";
import CartView from "../Components/CartView";

const CartRoutes = ({ handleAddToCart, handleDeleteItem, handleAbortCart, cartItems}) => {
  return (
    
        <Routes>
            <Route path='/' element={<Navigate to='catalog' />} />
            <Route path='*' element={<h1>Not Found 404</h1>} />  
            <Route path='catalog' element={<ProductsView handleAddToCart={handleAddToCart} />} />
            <Route path='cart' element={
                    cartItems?.length <= 0 ? (
                    <div className="alert alert-info">No hay productos en el carrito</div>
                    ) : (
                    <div className="my-4 w-50">
                        <CartView items={cartItems} handleDeleteItem={handleDeleteItem} handleAbortCart={handleAbortCart} />
                    </div>
                    )
                } />
        </Routes>
    
  )
}

export default CartRoutes