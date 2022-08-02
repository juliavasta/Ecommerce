import { css } from "@emotion/css";
import React from "react";
import { useParams } from "react-router";

import { useProducts } from "data/useProducts";
import ProductCardDetail from "components/products/ProductCardDetail";
import { useCartContext } from "context/CartContext";
import ProductsList from "components/products/ProductsList";
import Title from "components/heading/Title";

const productCardCSS = css`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-items: center;
  max-width: 1500px;
  margin: 0 auto;
  height: auto;

  @media (min-width: 500px) {
    padding: 40px 20px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1008px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function ProductPage() {
  const { results: products = [] } = useProducts();
  const { add, open } = useCartContext();
  const params = useParams();
  const id = params.id ? Number(params.id) : undefined;
  const product = products.find((product) => product.id === id);

  if (!product) {
    return null;
  }

  const productCategory = product.category;
  const relatedList = products.filter(
    (product) => product.category === productCategory
  );

  return (
    <div>
      <ProductCardDetail
        product={product}
        onAddtoCart={() => {
          add(product);
          open();
        }}
      />
      <Title title="Related Products" />
      <div className={productCardCSS}>
        <ProductsList products={relatedList} />
      </div>
    </div>
  );
}

export default ProductPage;
