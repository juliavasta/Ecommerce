import { css } from "@emotion/css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useProducts } from "data/useProducts";
import ProductsList from "components/products/ProductsList";
import Title from "components/heading/Title";
import { SortControl, sortByTypes } from "components/select/SortControl";
import { useLatest } from "hooks/useLatest";
import { usePrevious } from "hooks/usePrevious";

const pageWrapperCSS = css`
  margin-top: 130px;
`;

const productCardCSS = css`
  padding: 80px 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-items: center;
  max-width: 1500px;
  margin: 0 auto;
  height: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1008px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function sortByString(a, b, asc) {
  if (a < b) {
    return asc ? -1 : 1;
  }
  if (a > b) {
    return asc ? 1 : -1;
  }
  return 0;
}

function sortByNumber(a, b, asc) {
  return asc ? a - b : b - a;
}

function getSortedProducts(products, sortBy, sortByAsc) {
  if (!sortBy) {
    return products;
  }

  switch (sortBy) {
    case sortByTypes.name: {
      return products.slice().sort((a, b) => {
        return sortByString(a.name, b.name, sortByAsc);
      });
    }
    default: {
      return products.slice().sort((a, b) => {
        return sortByNumber(a.price, b.price, sortByAsc);
      });
    }
  }
}

function useTitle(cb) {
  const cbRef = useLatest(cb);
  const { category } = useParams();
  const prevCategory = usePrevious(category);

  const latestCb = cbRef.current;

  useEffect(() => {
    if (category !== prevCategory) {
      document.title = category;
      latestCb();
    }
  }, [category, prevCategory, latestCb]);
}

function ProductsPage() {
  const { results: products = [] } = useProducts();
  const { category } = useParams();
  const [sortBy, setSortBy] = useState();
  const [sortByAsc, setSortByAsc] = useState();

  const productsList = products.filter((product) => {
    return !category || product.category === category;
  });

  const sortedProductsList = getSortedProducts(productsList, sortBy, sortByAsc);

  useTitle(() => {
    setSortBy(undefined);
    setSortByAsc(undefined);
  });

  return (
    <div className={pageWrapperCSS}>
      <Title title={category} />
      <SortControl
        sortBy={sortBy}
        sortByAsc={sortByAsc}
        onSort={(sortBy, sortByAsc) => {
          setSortBy(sortBy);
          setSortByAsc(sortByAsc);
        }}
      />
      <div className={productCardCSS}>
        <ProductsList products={sortedProductsList} />
      </div>
    </div>
  );
}

export default ProductsPage;
