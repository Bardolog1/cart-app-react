import { products } from '../data/products.js';

export const getProducts = () => {
    return products;
}

export const getPriceTotal = (products) => {
    return products.reduce((acc, product) => acc + product.product.price * product.quantity, 0);
}   