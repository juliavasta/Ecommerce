import React from "react";
import { css } from "@emotion/css";

const h1WrapperCSS = css`
  text-align: center;
`;

const h1CSS = css`
  font-size: 20px;
  line-height: 60px;
  text-transform: uppercase;
`;

function H1({ title }) {
  return (
    <div className={h1WrapperCSS}>
      <h1 className={h1CSS}>{title}</h1>
    </div>
  );
}

export default H1;
