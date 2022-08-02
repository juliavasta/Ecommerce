import { css } from "@emotion/css";

const sortControlBtnWrapperCSS = css`
  display: flex;
  align-items: center;
  min-height: 40px;
  background-color: #f8f7f2;
  border-top: 1px solid rgba(0, 0, 0, 0.14);
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
  width: 100%;
`;

const sortControlBoxCSS = css`
  display: flex;
  align-items: center;
  min-height: 40px;

  @media (min-width: 768px) {
    flex: 1;
  }
`;

const sortControlBtnCSS = css`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  min-height: 40px;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 768px) {
    flex: 0 0 20%;
  }

  > select,
  select:focus {
    background-color: #f8f7f2;
    border: 0;
    border-radius: 0;
    text-transform: uppercase;
    padding-right: 10px;
  }
`;

const sortByTypes = {
  name: "NAME",
  price: "PRICE"
};

const SortControl = ({ sortBy, sortByAsc, onSort }) => (
  <div className={sortControlBtnWrapperCSS}>
    <div className={sortControlBoxCSS}></div>
    <div className={sortControlBtnCSS}>
      <select
        value={sortBy ? `${sortBy}:${sortByAsc}` : 0}
        onChange={(e) => {
          const value = e.currentTarget.value;
          const [sortBy, sortByAsc] = value.split(":");
          onSort(sortBy, sortByAsc === "true");
        }}
      >
        <option value="0">Sort by</option>
        <option value={`${sortByTypes.price}:${true}`}>
          Price: Low to High
        </option>
        <option value={`${sortByTypes.price}:${false}`}>
          Price: High to Low
        </option>
        <option value={`${sortByTypes.name}:${true}`}>A - Z</option>
        <option value={`${sortByTypes.name}:${false}`}>Z - A</option>
      </select>
      <div>↓</div>
    </div>
  </div>
);

export { sortByTypes, SortControl };
