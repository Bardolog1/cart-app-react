import React from "react";
import { getProducts } from "../services/productsService";
import { useEffect, useState } from "react";
import ProductView from "./ProductView";

const ProductsView = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <>
      <h4>Products</h4>
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
