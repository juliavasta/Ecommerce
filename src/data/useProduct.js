import { useEffect, useState } from "react";

import { getProduct } from "services/service";

export function useProduct(id) {
  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const product = await getProduct(id);
        setProduct(product);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, [id]);

  return product;
}
