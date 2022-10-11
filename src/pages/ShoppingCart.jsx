import React, { useContext, useEffect, useState } from "react";
import ShoppingItems from "../components/ShoppingItems/ShoppingItems";
import ShoppingPayment from "../components/ShoppingPayment/ShoppingPayment";
import Context from "../context/context";

function ShoppingCart() {
  const { product } = useContext(Context);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    setTotal(product.map((item) => Number(item.totalValue)));
  }, [product]);

  return (
    <div className="shopping__container">
      <ShoppingItems />
      <ShoppingPayment total={total} />
    </div>
  );
}

export default ShoppingCart;
