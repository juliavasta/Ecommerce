import React, { useState } from "react";
import { css } from "@emotion/css";

import Card from "components/card/Card";
import ProductDetails from "components/products/ProductDetails";
import PrimaryButton from "components/button/PrimaryButton";
import QuantitySelector from "components/select/QuantitySelector";
import { useCartContext } from "context/CartContext";

const productCSS = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px auto;
  max-width: 1330px;
  margin-top: 0;
  height: auto;

  @media (min-width: 768px) {
    margin-top: 180px;
    justify-content: center;
    flex-direction: row;
  }
`;

const productImgCSS = css`
  height: auto;
  width: 100%;
  margin-right: 0;
  @media (min-width: 768px) {
    margin-right: 30px;
    max-width: 400px;
  }
`;

const productDescriptionCSS = css`
  padding: 40px;
  @media (min-width: 768px) {
    padding: 0 30px;
  }
`;

const productNameCSS = css`
  text-transform: capitalize;
  font-size: 31px;
`;

const productPriceCSS = css`
  font-size: 16px;
  padding: 22px 0;
`;

const productCategoryCSS = css`
  font-size: 14px;
  letter-spacing: 0.5px;
  padding-bottom: 22px;
`;

const defaultQuantity = 1;

function ProductCardDetail({ product }) {
  const { add, open } = useCartContext();
  const [quantity, setQuantity] = useState(defaultQuantity);

  return (
    <Card title="Product">
      <div className={productCSS}>
        <div className={productImgCSS}>
          {!!product.image && (
            <img
              className={css`
                max-width: 100%;
                height: auto;
              `}
              src={product.image}
              alt={product.name}
            />
          )}
        </div>
        <div className={productDescriptionCSS}>
          <h1 className={productNameCSS}>{product.name}</h1>
          <div className={productPriceCSS}>${product.price}</div>
          <div className={productCategoryCSS}>Category: {product.category}</div>

          <QuantitySelector
            onClickRemove={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
            quantity={quantity}
            onClickAdd={() => setQuantity(quantity + 1)}
            width="100%"
          />
          <PrimaryButton
            onClick={() => {
              add(product, quantity);
              open();
            }}
            text=" Add to cart"
            width="100%"
          />
          <ProductDetails product={product} />
        </div>
      </div>
    </Card>
  );
}

export default ProductCardDetail;
