import styled from "@emotion/styled";

const ProductQuantityWrapperCSS = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.14);
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: 39px;
  margin-bottom: 22px;
`;

const ProductQuantityCSS = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
`;

const ProductQuantityBtnCSS = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 10px 20px;
`;

function QuantitySelector({ onClickRemove, onClickAdd, quantity, width }) {
  return (
    <ProductQuantityWrapperCSS width={width}>
      <ProductQuantityBtnCSS onClick={onClickRemove}>-</ProductQuantityBtnCSS>
      <ProductQuantityCSS>{quantity}</ProductQuantityCSS>
      <ProductQuantityBtnCSS onClick={onClickAdd}>+</ProductQuantityBtnCSS>
    </ProductQuantityWrapperCSS>
  );
}

export default QuantitySelector;
