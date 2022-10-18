import React, { useContext, useEffect } from "react";
import Context from "../../context/context";

function MercadoLivreFetch() {
  const { search, setResults, setLoading } = useContext(Context);
  const urlFetch = async () => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?category=${search}`;
    const requirement = await fetch(url);
    const response = await requirement.json();
    setLoading(true);
    setResults(response.results);
  };

  useEffect(() => {
    urlFetch();
  }, [search]);

  return (
    <div />
  );
}

export default MercadoLivreFetch;
