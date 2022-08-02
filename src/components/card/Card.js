import React from "react";
import { css } from "@emotion/css";

const cardCSS = css`
  cursor: pointer;
  list-style: none;
  margin-bottom: 30px;
`;

function Card({ children, details }) {
  return (
    <div className={cardCSS}>
      {children}
      {details}
    </div>
  );
}

export default Card;
