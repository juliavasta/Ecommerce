import React from "react";
import styled from "@emotion/styled";

const LogginButtonCSS = styled.input`
  margin: ${(props) => props.margin};
  cursor: pointer;
  color: #241c23;
  border: none;
  background-size: 200% 200%;
  background-image: linear-gradient(to top, #241c23 50%, transparent 50%);
  border-bottom: 3px solid #241c23;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.09s ease-in;
  padding: 15px 20px;
  text-transform: uppercase;
  background: none;
  display: flex;

  :hover {
    background-color: black;
    color: white;
  }
`;

function LoginButton({ value, onClick, margin, title }) {
  return (
    <LogginButtonCSS
      type="submit"
      value={value}
      title={title}
      onClick={onClick}
      margin={margin}
    />
  );
}

export default LoginButton;
