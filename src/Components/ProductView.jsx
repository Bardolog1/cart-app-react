import React from "react";
import { useNavigate } from "react-router-dom";

const ProductView = ({ product, handleAddToCart }) => {

  const navigate = useNavigate (); 
  const AddToCart = (product) => {
    handleAddToCart(product);
    navigate('/cart');

  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">$ {product.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => AddToCart(product)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductView;
