import React, { useState } from "react";
import { cx, css } from "@emotion/css";
import { CloseOutlined } from "@ant-design/icons";

import { useCartContext } from "context/CartContext";
import Card from "components/card/Card";
import CardItem from "components/card/CardItem";
import CartItemTotal from "components/cart/CartItemTotal";
import CartIcon from "components/cart/CartIcon";
import PrimaryButton from "components/button/PrimaryButton";
import Hr from "components/hr/Hr";

const subtotalCSS = css`
  font-size: 14px;
`;

const totalCSS = css`
  font-size: 17px;
  font-weight: bold;
`;

const cartCSS = css`
  @media (min-width: 500px) {
    width: 392px;
    left: auto;
    right: 0;
  }
  cursor: pointer;
  background-color: #f8f7f2;
  height: 100%;
  width: 100%;
  padding: 20px 30px 20px;
  position: fixed;
  z-index: 3000;
  top: 0;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.4s ease-in-out;
`;

const cartHeaderCSS = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const cartTitleCSS = css`
  font-size: 20px;
  line-height: 1.4;
`;

const cartEmptyCSS = css`
  font-size: 13px;
  text-transform: uppercase;
  padding-top: 30px;
`;

const discountWrapperCSS = css`
  font-size: 14px;
  letter-spacing: 0.5px;
  padding-top: 20px;
`;

const discountCashCSS = css`
  display: flex;
  margin-bottom: 15px;
`;

const discountCSS = css`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
`;

function Cart() {
  const { add, items = [], remove, open } = useCartContext();
  const [discForCash, setDiscForCash] = useState(0);

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const discountedPrice = subtotal < 1000 ? 0 : subtotal * 0.15;
  const discountForCash = subtotal * discForCash;
  const totalPrice = subtotal - discountedPrice - discountForCash;

  function handleDiscForCash() {
    if (!discForCash) {
      setDiscForCash(0.2);
    } else {
      setDiscForCash(0);
    }
  }

  return (
    <div className={cartCSS}>
      <CartIcon totalQuantity={totalQuantity} />
      <div className={cartHeaderCSS}>
        <h1 className={cartTitleCSS}>Shopping cart</h1>
        <CloseOutlined onClick={() => open(false)} />
      </div>
      <div className={cartEmptyCSS}>
        {items.length === 0 && <p>Your cart is empty</p>}
      </div>

      {items.map((item) => (
        <Card key={item.product.id}>
          <div key={item.id}>
            <CardItem
              src={item.product.image}
              alt={item.product.name}
              itemProductName={item.product.name}
              onClickRemoveItem={() => remove(item.product.id, true)}
              productPriceTotal={Number(
                (item.product.price * item.quantity).toFixed(2)
              )}
              quantity={item.quantity}
              onClickRemove={() => remove(item.product.id)}
              onClickAdd={() => add(item.product)}
            />
          </div>
        </Card>
      ))}

      {items.length !== 0 && (
        <>
          <Hr />
          <CartItemTotal
            className={cx(subtotalCSS)}
            totalTitle="Subtotal"
            totalItemPrice={subtotal.toFixed(2)}
          />
          <Hr />
          <div className={discountWrapperCSS}>
            <div className={discountCashCSS}>
              <div onClick={() => handleDiscForCash()}>
                →Apply discount 20% paying with transfer or cash
                {!!discForCash && <div>Discount: {discountForCash}</div>}
              </div>
            </div>
            <div className={discountCSS}>
              <div>→Discount for purchases over $1000</div>
              <div>${discountedPrice.toFixed(2)}</div>
            </div>
          </div>
          <Hr />
          <CartItemTotal
            className={cx(totalCSS)}
            totalTitle="Order Total"
            totalItemPrice={totalPrice.toFixed(2)}
          />
          <Hr />
          <PrimaryButton text="CHECKOUT" />
        </>
      )}
    </div>
  );
}

export { Cart };
