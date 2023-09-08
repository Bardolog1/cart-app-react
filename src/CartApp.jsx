import { useItemsCart } from "./hooks/useItemsCart";
import Navbar from "./Components/Navbar";
import CartRoutes from "./routes/CartRoutes";




const CartApp = () => {
    const {  cartItems, handleAddToCart, handleDeleteItem, handleAbortCart } = useItemsCart();

    return (
        <>
            <Navbar />
            <div className="container my-5">
                <h3>Cart App</h3>
                <CartRoutes handleAddToCart={handleAddToCart} handleDeleteItem={handleDeleteItem} handleAbortCart={handleAbortCart} cartItems={cartItems} />
            </div>
        </>
    );
};

export default CartApp;
