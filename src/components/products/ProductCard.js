import React from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router";

import Card from "components/card/Card";
import PrimaryButton from "components/button/PrimaryButton";

const productDescriptionCSS = css`
  width: 100%;
  height: auto;
  text-align: center;
`;

const productNameCSS = css`
  font-weight: 400;
  font-size: 17px;
  margin-top: 14px;
  letter-spacing: 0.5px;
`;

const productPriceCSS = css`
  margin: 14px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

function ProductCard({ product, onAddtoCart }) {
  const navigate = useNavigate();

  return (
    <Card product={product}>
      <div>
        {!!product.image && (
          <img
            className={css`
              height: auto;
              width: 100%;
              max-width: 100%;
              object-fit: cover;
            `}
            src={product.image}
            alt={product.name}
            onClick={() => navigate(`/products/page/${product.id}`, {})}
          />
        )}
        <div className={productDescriptionCSS}>
          <h4 className={productNameCSS}>{product.name}</h4>
          <p className={productPriceCSS}>${product.price}</p>
          <PrimaryButton onClick={onAddtoCart} text=" Add to cart" />
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;
