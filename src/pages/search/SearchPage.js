import { css } from "@emotion/css";
import { useSearchParams } from "react-router-dom";

import { useProducts } from "data/useProducts";
import ProductsList from "components/products/ProductsList";
import Title from "components/heading/Title";

const pageWrapperCSS = css`
  margin-top: 130px;
  background-color: #f8f7f2;
`;

const productCardCSS = css`
  padding: 50px 20px 80px 20px;
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

const errorMessage = css`
 text-align: center;
`

function SearchPage() {
  const { results: products = [] } = useProducts();
  const [searchParams] = useSearchParams();

  const q = (searchParams.get("q") || "").toLowerCase();

  const productsListSearch = products.filter((product) => {
    return product.name.toLowerCase().includes(q);
  });

  return (
    <div className={pageWrapperCSS}>
       <Title title="Search results"/>
      {productsListSearch.length === 0 ? (
        <p className={errorMessage}>
          Sorry, we couldn't find any matches for "{q}". Try refining your
          search.
        </p>
      ) : (
        <div className={productCardCSS}>
          <ProductsList products={productsListSearch} />
        </div>
      )}
    </div>
  );
}

export default SearchPage;

