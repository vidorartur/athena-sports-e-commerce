import React, { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import Context from "../../context/context";
import "./ProductDetails.css";

function ProductDetail() {
  const history = useHistory();
  const { setProduct, product, productDetails } = useContext(Context);

  const handleClick = ({ target }) => {
    const img = productDetails.thumbnail;
    const { title } = productDetails;
    const price = Math.abs(parseFloat(productDetails.price * 0.0069)).toFixed(2);
    const { id } = target;
    const quantity = 1;
    const totalValue = price * quantity;
    const copyProducts = [...product];
    const element = copyProducts.find((products) => products.id === id);
    const productsDetails = {
      id,
      img,
      title,
      price,
      quantity,
      totalValue,
    };
    if (!element) {
      copyProducts.push(productsDetails);
    } else {
      element.quantity += 1;
      element.totalValue = element.quantity * element.price;
    }
    setProduct(copyProducts);
  };

  return (
    <div className="product_details">
      <button
        type="button"
        onClick={() => history.push("/")}
        className="btn-primary"
        id={productDetails.id}
      >
        <h5>
          Back to Shopping
        </h5>

      </button>
      <h3 id={productDetails.title} data-testid="title_product">{productDetails.title}</h3>
      <h3 id={Math.abs(parseFloat(productDetails.price * 0.0069)).toFixed(2)}>
        {`$${Math.abs(parseFloat(productDetails.price * 0.0069)).toFixed(2)}`}
      </h3>
      <button
        type="button"
        onClick={(e) => handleClick(e)}
        className="btn-primary"
        id={productDetails.id}
      >
        <h5>
          Add to Cart
        </h5>

      </button>
      <button
        type="button"
        onClick={() => { history.push("/shopping-cart"); }}
        className="btn-primary"
        id={productDetails.id}
      >
        <h5>
          <HiShoppingCart />
          {" "}
          Shopping Cart
        </h5>
      </button>
    </div>

  );
}

export default ProductDetail;
