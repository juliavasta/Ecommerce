import styled from "@emotion/styled";

const PrimaryButtonCSS = styled.button`
  border: 0;
  background-color: #241c23;
  color: white;
  cursor: pointer;
  margin-bottom: 14px;
  padding: 14px 28px;
  white-space: nowrap;
  width: ${(props) => props.width};
`;

function PrimaryButton({ onClick, text, width }) {
  return (
    <PrimaryButtonCSS onClick={onClick} width={width}>
      {text}
    </PrimaryButtonCSS>
  );
}

export default PrimaryButton;
