import ProductCard from "./ProductCard";
import { useCartContext } from "context/CartContext";

function ProductsList({ products }) {
  const { add, open } = useCartContext();

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard
            product={product}
            onAddtoCart={() => {
              add(product);
              open();
            }}
          />
        </div>
      ))}
    </>
  );
}

export default ProductsList;
