
export const getProducts = async() => {

    const response = await fetch('http://localhost:8080/api/products');

    const products = await response.json();

    return products;
}

export const getPriceTotal = (products) => {
    return products.reduce((acc, product) => acc + product.product.price * product.quantity, 0);
}   