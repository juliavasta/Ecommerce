import products from "mocks/products";

export async function getProducts() {
  return products;
}

export async function getProduct(id) {
  const product = products.results.find((p) => p.id === id);
  return product;
}
