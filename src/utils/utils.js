import { css } from "@emotion/css";

export function joinCategories(product) {
  if (product.category.length > 0) {
    return product.category.join(", ");
  }
}

export function getStock(product) {
  if (product.stocked) {
    return product.name;
  } else {
    return (
      <div>
        {product.name}:
        <span
          className={css`
            color: #e1796f;
          `}
        >
          {" "}
          sin stock
        </span>
      </div>
    );
  }
}
