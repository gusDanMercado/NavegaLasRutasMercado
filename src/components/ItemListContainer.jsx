import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../products";
import ItemList from "../components/ItemList";

const ItemListContainer = ({ mensaje }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = categoryId ? getProductsByCategory : getProducts;
    fetchData(categoryId).then((data) => setItems(data));
  }, [categoryId]);

  return (
    <>
      <div className="container text-center mt-4">
        <h2>Mi Lista de Productos</h2>
        {mensaje && <h2 className="mb-4">{mensaje}</h2>}
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemListContainer;
