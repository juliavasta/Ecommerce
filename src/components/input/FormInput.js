import React from "react";
import { css } from "@emotion/css";

const formGroupCSS = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const formLabelCSS = css`
  font-size: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const formInputCSS = css`
  border: 1px solid rgba(0, 0, 0, 0.14);
  padding: 12px;
`;

function FormInput({ label, ...otherProps }) {
  return (
    <div className={formGroupCSS}>
      <label className={formLabelCSS}>{label}</label>
      <input className={formInputCSS} {...otherProps} />
    </div>
  );
}

export default FormInput;
