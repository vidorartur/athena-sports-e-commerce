import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import context from "./context";

function Provider({ children }) {
  const [search, setSearch] = useState("MLA1285");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState([]);
  const [imgHero, setImgHero] = useState("football");
  const [productDetails, setProductDetails] = useState(undefined);

  const contextValue = useMemo(() => {
    const objState = {
      search,
      setSearch,
      results,
      setResults,
      loading,
      setLoading,
      product,
      setProduct,
      total,
      setTotal,
      imgHero,
      setImgHero,
      productDetails,
      setProductDetails,
    };
    return objState;
  }, [search,
    setSearch,
    results,
    setResults,
    loading,
    setLoading,
    product,
    setProduct,
    total,
    setTotal,
    imgHero,
    setImgHero,
    productDetails,
    setProductDetails]);

  return (
    <context.Provider value={contextValue}>
      { children }
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Provider;
