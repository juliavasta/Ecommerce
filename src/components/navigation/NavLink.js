import styled from "styled-components";

const NavLink = styled.li`
  cursor: pointer;
  margin-right: 21px;
  position: relative;
  &:last-of-type {
    margin: 0;
  }
  > a {
    &::after {
      content: "";
      position: absolute;
      background-color: black;
      height: 2px;
      width: 0;
      left: 0;
      bottom: -10px;
      transition: 0.3s ease-in-out;
    }
    &:link,
    &:visited {
    }
    &:hover::after {
      width: 100%;
    }
  }
`;

export default NavLink;
