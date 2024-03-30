import { getCartProductFromLS } from "./getCartProductFromLS";

export const updateCartProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");

  let localCartProducts = getCartProductFromLS();
  let initalValue = 0;
  let totalProductPrice = localCartProducts.reduce((accum, currElem) => {
    let productPrcie = parseInt(currElem.price) || 0;
    return accum + productPrcie;
  }, initalValue);

  productSubTotal.textContent = `₹${totalProductPrice}`;
  productFinalTotal.textContent = `₹${totalProductPrice + 50}`;

  //   console.log(totalProductPrice);
};
