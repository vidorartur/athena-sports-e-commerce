import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import Context from "../../context/context";
import "./ProductImages.css";

function ProductImages() {
  const { productDetails } = useContext(Context);

  return (

    <div className="product_images">
      <Carousel variant="dark" className="carousel">
        {productDetails.pictures.map((item) => (
          <Carousel.Item key={item.url}>
            <img src={item.url} alt="product" className="w-100 h-100" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>

  );
}

export default ProductImages;
