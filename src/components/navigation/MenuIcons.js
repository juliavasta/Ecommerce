import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";

import CartIcon from "components/cart/CartIcon";

const iconsNavBarCSS = css`
  display: flex;
  align-items: center;
`;

const iconsNavBarLinkCSS = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 1.5px;
  margin: 0 14px 0 0;
`;

function MenuIcons({
  onClick,
  totalQuantity,
  onClickTitleTab,
  onClickOpenSearch,
  onClickCart
}) {
  return (
    <ul className={iconsNavBarCSS}>
      <li className={iconsNavBarLinkCSS} onClick={onClickTitleTab}>
        <Link to="/account/login">
          <UserOutlined />
        </Link>
      </li>

      <li className={iconsNavBarLinkCSS} onClick={onClickOpenSearch}>
        <SearchOutlined />
      </li>
      <li>
        <CartIcon totalQuantity={totalQuantity} onClick={onClickCart} />
      </li>
    </ul>
  );
}

export default MenuIcons;

