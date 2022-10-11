import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../context/context";
import ProductImages from "../components/ProductImages/ProductImages";
import ProductDetail from "../components/ProductDetail/ProductDetail";

function ProductDetails() {
  const { productDetails, setProductDetails } = useContext(Context);
  const param = useParams();

  const fetchItem = async () => {
    const url = `https://api.mercadolibre.com/items/${param.id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProductDetails(data);
  };

  useEffect(() => { fetchItem(); }, []);

  return (
    <div className="background_products">
      {productDetails ? (
        <div className="product">
          <ProductImages />
          <ProductDetail />
        </div>

      ) : <div>Loading...</div>}

    </div>
  );
}

export default ProductDetails;
