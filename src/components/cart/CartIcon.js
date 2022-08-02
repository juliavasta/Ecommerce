import { css } from "@emotion/css";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { useCartContext } from "context/CartContext";

const cartIconCSS = css`
  color: #fff;
  background: #1adb84;
  border-radius: 50%;
  font-size: 10px;
  font-weight: bold;
  height: 17px;
  width: 17px;
  margin-left: 8px;
  top: 12px;
  right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function CartIcon({ totalQuantity, onClick }) {
  const { items = [] } = useCartContext();

  return (
    <div
      className={css`
        display: inline-flex;
        align-items: center;
      `}
    >
      <ShoppingCartOutlined style={{ fontSize: "17px" }} onClick={onClick} />
      {items.length ? (
        <span className={cartIconCSS} onClick={onClick}>
          {totalQuantity}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}

export default CartIcon;
