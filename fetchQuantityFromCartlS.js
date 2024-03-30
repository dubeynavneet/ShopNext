import { getCartProductFromLS } from "./getCartProductFromLS";

export const fetchQuantityFromCartlS = (id, price) => {
  let cartProducts = getCartProductFromLS();

  let existingProduct = cartProducts.find((currProd) => currProd.id === id);

  let quantity = 1;

  if (existingProduct) {
    quantity = existingProduct.quantity;
    price = Number(existingProduct.price.toFixed(2));
  }

  return { quantity, price };
};
