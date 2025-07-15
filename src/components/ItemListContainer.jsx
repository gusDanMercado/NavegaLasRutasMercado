import React from "react";

const ItemListContainer = ({ mensaje }) => {
  return (
    <>
      <div className="container text-center mt-4">
        <h2>Mi Lista de Productos</h2>
        <h3>{mensaje}</h3>
      </div>
    </>
  );
};

export default ItemListContainer;
