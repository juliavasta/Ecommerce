import { css } from "@emotion/css";
import { CloseOutlined } from "@ant-design/icons";

import QuantitySelector from "components/select/QuantitySelector";

const productDescriptionWrapperCSS = css`
  background-color: #f8f7f2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

const productDescriptionCSS = css`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

const productNameWrapperCSS = css`
  display: flex;
  justify-content: space-between;
`;

const productNameCSS = css`
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
`;

const productPriceCSS = css`
  font-size: 13px;
  letter-spacing: 0.5px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

function CardItem({
  itemProductName,
  onClickRemoveItem,
  productPriceTotal,
  itemQuantity,
  quantity,
  onClickRemove,
  onClickAdd,
  src,
  alt
}) {
  return (
    <div className={productDescriptionWrapperCSS}>
      <div className={productDescriptionCSS}>
        <div
          className={css`
            max-width: 25%;
            margin-right: 25px;
          `}
        >
          <img
            src={src}
            alt={alt}
            className={css`
              max-width: 100%;
              height: auto;
              object-fit: cover;
            `}
          />
        </div>
        <div
          className={css`
            display: flex;
            align-items: center;
            margin-right: auto;
          `}
        >
          <div>
            <div className={productNameWrapperCSS}>
              <div className={productNameCSS}>{itemProductName}</div>
            </div>
            <div className={productPriceCSS}>${productPriceTotal}</div>
            <QuantitySelector
              quantity={quantity}
              onClickRemove={onClickRemove}
              onClickAdd={onClickAdd}
            />
          </div>
        </div>
        <CloseOutlined
          onClick={onClickRemoveItem}
          style={{ fontSize: "12px" }}
        />
      </div>
    </div>
  );
}

export default CardItem;
