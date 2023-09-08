import { useReducer, useEffect } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, ClearCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";

const initialCartSessionStorage = JSON.parse(sessionStorage.getItem('cart')) || [];


export const useItemsCart = () => {

    /*    
    
        Aqui tenemos la forma de hacer todos los procesos de add, delete, update, etc.
        pero no es la forma correcta, ya que existe un hook llamado useReducer que nos 
        ayuda a manejar el estado de una forma mas eficiente, permite hacer las mismas
        acciones que useState, pero de una forma mas ordenada y eficiente, ya que permite
        tener un estado global, y no tener que pasar el estado por props a todos los componentes,
        ademas permite centralizar todas las acciones en un solo lugar, y no tener que hacer
        las acciones en cada componente, como se hace en este ejemplo.
        
        
        const [cartItems, setCartItems] = useState(initialCartSessionStorage || []);
        
    
        const handleAddToCart = (product) => {
            const exist = cartItems.find((item) => item.product.id === product.id);
    
            if (exist) {
            setCartItems(
                cartItems.map((item) =>
                item.product.id === product.id
                    ? {
                        ...exist,
                        quantity: exist.quantity + 1,
                        total: exist.total + product.price,
                    }
                    : item
                )
            );
            } else {
            setCartItems([
                ...cartItems,
                {
                product,
                quantity: 1,
                total: product.price * 1,
                },
            ]);
            }
        };
    
        const handleDeleteItem = (id) => {
            setCartItems([...cartItems.filter((item) => item.product.id !== id)]);
        };
    
        */

    /* aqui usamos el hook useReducer, que nos permite manejar el estado de una forma mas eficiente */

    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartSessionStorage );

    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(cartItems));
        // guardamos el carrito en el sessionStorage, para que no se pierda al recargar la página, se pierde al cerrar el navegador
    }, [cartItems]);

    const handleAddToCart = (product) => {

        const exist = cartItems.find((item) => item.product.id === product.id);

        if (exist) {
            dispatch({
                type: UpdateQuantityProductCart,
                payload: {
                    product,
                    exist
                }
            });
        } else {
            dispatch({
                type: AddProductCart,
                payload: product
            });
        }
    };

    const handleDeleteItem = (id) => {
        dispatch({
            type: DeleteProductCart,
            payload: id
        });
    };

    const handleAbortCart = () => {
        dispatch({
            type: ClearCart
        });
    };
    return {
        cartItems,
        handleAddToCart,
        handleDeleteItem,
        handleAbortCart
    }
}