import React from "react";
import { getProducts } from "../services/productsService";
import { useEffect, useState } from "react";
import ProductView from "./ProductView";

const ProductsView = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const findAll = async () => {
    const productsBack = await getProducts();
    setProducts(productsBack);
    setIsLoading(false);
  }

  useEffect(() => {
    findAll();
  }, []);

  return (
    <>
      <h4>Products</h4>
      {isLoading && <div className="alert alert-info">Loading...</div>}
     
      <div className="row">
        {products.map((product) => (
          <div className="col-4 my-2" key={product.id}>
            <ProductView product={product} handleAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsView;
