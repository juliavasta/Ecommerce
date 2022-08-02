import React, { useState } from "react";
import { css } from "@emotion/css";

const detailsWrapperCSS = css`
  white-space: nowrap;
`;

const detailsTitleCSS = css`
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding-top: 8px;
  padding-bottom: 10px;
`;

const detailsTextCSS = css`
  font-size: 14px;
  letter-spacing: 0.5px;
  padding-top: 12px;
`;

const storesCSS = css`
  color: black;
  font-size: 14px;
  padding-bottom: 8px;
`;

function ProductDetails({ product }) {
  const [options, setOptions] = useState();
  const [text, setText] = useState("See options ↓");

  const { stores } = product;

  function handleOptions(stores) {
    if (!options) {
      setOptions(stores.map((item) => <div className={storesCSS}>{item}</div>));
      setText("Hide options ←");
    } else {
      setOptions();
      setText("See options ↓");
    }
  }

  return (
    <div className={detailsWrapperCSS}>
      <h3 className={detailsTitleCSS}> Stores available:</h3>
      <div>
        <p className={detailsTextCSS} onClick={() => handleOptions(stores)}>
          {text}
        </p>
        {options}
      </div>
    </div>
  );
}

export default ProductDetails;
