import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Context from "../../context/context";
import "./ProductContainer.css";

function ProductsContainer() {
  const {
    results, loading, setProduct, product,
  } = useContext(Context);

  const history = useHistory();
  const handleClick = ({ target }) => {
    const img = target.parentNode.firstChild.name;
    const title = target.parentNode.firstChild.nextSibling.firstChild.id;
    const price = target.parentNode.firstChild.nextSibling.firstChild.nextSibling.id;
    const { id } = target;
    const quantity = 1;
    const totalValue = price * quantity;
    const copyProducts = [...product];
    const element = copyProducts.find((products) => products.id === id);
    const productDetails = {
      id,
      img,
      title,
      price,
      quantity,
      totalValue,
    };
    if (!element) {
      copyProducts.push(productDetails);
    } else {
      element.quantity += 1;
      element.totalValue = element.quantity * element.price;
    }
    setProduct(copyProducts);
  };

  return (
    <div className="products__container">
      { loading === true
        ? results.map((item) => (
          <Card
            style={{ width: "18rem" }}
            key={item.id}
            className="product__container"
            data-testid="product__container"
            id={item.id}
          >
            <Card.Img variant="top" src={item.thumbnail} alt={item.title} name={item.thumbnail} />
            <Card.Body>
              <Card.Title id={item.title}>{item.title}</Card.Title>
              <Card.Text id={Math.abs(parseFloat(item.price * 0.0069)).toFixed(2)}>
                {`$${Math.abs(parseFloat(item.price * 0.0069)).toFixed(2)}`}
              </Card.Text>
            </Card.Body>
            <button
              type="button"
              onClick={() => history.push(`/product/${item.id}`)}
              id={item.id}
              className="btn-primary"
              data-testid="product__container_details_button"
            >
              Details
            </button>
            <button type="button" data-testid="product__container_cart_button" onClick={(e) => handleClick(e)} id={item.id} className="btn-primary">Add to Cart</button>
          </Card>
        ))
        : <div>Loading</div>}
    </div>
  );
}

export default ProductsContainer;
