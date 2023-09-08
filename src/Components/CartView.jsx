import React, { useEffect, useState } from "react";
import { getPriceTotal } from "../services/productsService";
import { useNavigate } from "react-router-dom";

const CartView = ({ items, handleDeleteItem, handleAbortCart }) => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  useEffect(() => {
      setTotal(getPriceTotal(items));
  }, [items]);

  const handleDelete = (id) => {
    handleDeleteItem(id);
  };

  const handleAbort = () => {
    handleAbortCart();
    toCatalog();
  };

  const toCatalog = () => {
    navigate("/catalog");
  };

  return (
    <>
      <h4>Carrito de compras</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ product: { id, name, price }, quantity, total }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>$ {price}</td>
              <td>{quantity}</td>
              <td>$ {quantity * price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(id);
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end fw-bold">
              Total
            </td>
            <td colSpan="2" className="text-start fw-bold">
              $ {total}
            </td>
          </tr>
        </tfoot>
      </table>
      
      <button className="btn btn-danger me-2"
        onClick={() => {
          handleAbort();
        }}
      >Cancelar compra</button>
      <button className="btn btn-primary me-2"
        onClick={toCatalog}
      >Seguir comprando</button>
      <button className="btn btn-success"
        onClick={() => { navigate('/checkout') }}
      >Finalizar compra</button>

    </>
  );
};

export default CartView;
