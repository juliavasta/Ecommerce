import { css } from "@emotion/css";

const totalWrapperCSS = css`
  font-weight: 700;
  display: flex;
  justify-content: space-between;
`;

function CartItemTotal({ totalItemPrice, totalTitle, className }) {
  return (
    <div className={totalWrapperCSS}>
      <div className={className}>{totalTitle}</div>
      <div className={className}>${totalItemPrice}</div>
    </div>
  );
}

export default CartItemTotal;
