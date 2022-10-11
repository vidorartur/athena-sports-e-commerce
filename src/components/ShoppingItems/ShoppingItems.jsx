import React, { useContext } from "react";
import Context from "../../context/context";
import "./ShoppingItems.css";

function ShoppingItems() {
  const { product, setProduct } = useContext(Context);

  const handlePlusItem = (id) => {
    const copyProducts = [...product];
    const element = copyProducts.find((products) => products.id === id);
    element.quantity += 1;
    element.totalValue = (element.quantity * element.price).toFixed(2);
    setProduct(copyProducts);
  };

  const handleMinusItem = (id) => {
    const copyProducts = [...product];
    const element = copyProducts.find((products) => products.id === id);
    if (element.quantity > 1) {
      element.quantity -= 1;
      element.totalValue = (element.quantity * element.price).toFixed(2);
      setProduct(copyProducts);
    } else {
      element.totalValue = 0.00;
      const filteredProducts = copyProducts.filter((products) => products.id !== id);
      setProduct(filteredProducts);
    }
  };
  return (
    <div className="shopping__items">
      <ul className="shopping__items_ul">
        {product.length > 0
          ? product.map((item) => (
            <li
              key={item.id}
              className="shopping__items_li"
              id={item.id}
            >
              <img src={item.img} alt={item.title} name={item.img} />
              <p id={item.title}>{item.title}</p>
              <h5>{`$${item.price}`}</h5>
              <div className="btn_shopping-cart">
                <button type="button" onClick={(e) => handlePlusItem(e.target.id)} id={item.id}> + </button>
                <br />
                <button type="button" onClick={(e) => handleMinusItem(e.target.id)} id={item.id}> - </button>
              </div>
              <h5>
                Quantity:
                {" "}
                {item.quantity}
              </h5>
              <h5>
                Total Value:
                <br />
                {`$${item.totalValue}`}
              </h5>
            </li>
          )) : ""}
      </ul>
    </div>
  );
}

export default ShoppingItems;
