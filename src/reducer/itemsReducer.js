import { AddProductCart, ClearCart, DeleteProductCart, UpdateQuantityProductCart } from "./itemsActions";

export const itemsReducer = (state = [], action) => {

    switch (action.type) {
        case AddProductCart:
            return [
                ...state,
                {
                    product: action.payload,
                    quantity: 1,
                    total: action.payload.price *1 
                }];
       
        case UpdateQuantityProductCart:
            return state.map((item) =>
                
                item.product.id === action.payload.product.id
                    ? {
                        ...action.payload.exist,
                        quantity: action.payload.exist.quantity + 1,
                        total: action.payload.exist.total + action.payload.exist.product.price,
                    }
                    : item
                
            );
               
            
        case DeleteProductCart:
            return [...state.filter(item => item.product.id !== action.payload)];
        
        case ClearCart:
            return [];
        
        default:
            return state;
    }
}