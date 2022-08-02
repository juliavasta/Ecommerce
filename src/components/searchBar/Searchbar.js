import { css } from "@emotion/css";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { SearchOutlined } from "@ant-design/icons";

import useOutsideClick from "hooks/useOutsideClick";
import { useCartContext } from "context/CartContext";


const searchBarCSS = css`
  padding: 10px 10px 10px 0;
  border: none;
  margin-left: 15px;
  width: 100%;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const searchInnerWrapperCSS = css`
  box-shadow: rgb(88 102 126 / 8%) 0px 4px 24px,
    rgb(88 102 126 / 12%) 0px 1px 2px;
  background-color: #fff;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  z-index: 1000;
  padding: 30px;
`;

const Searchbar = ({ onClose }) => {
  const { searchText, search } = useCartContext();
  const ref = useRef();
  const navigate = useNavigate();

  useOutsideClick(ref, () => {
    onClose();
  });

  const handleSearch = (e) => {
    search(e.currentTarget.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onClose();
      navigate(`/search?q=${searchText}`);
    }
  };

  useEffect(() => {
    return () => {
      search("");
    };
  }, [search]);

  return (
    <div className={searchInnerWrapperCSS} ref={ref}>
      <SearchOutlined />
      <input
        className={searchBarCSS}
        type="search"
        placeholder="Find products"
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
        autoFocus
      />
    </div>
  );
};

export default Searchbar;

