import { useEffect, useState } from "react";

import { getProducts } from "services/service";

export function useProducts() {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  return products || {};
}
