import products from "./api/products.json" assert { type: "json" };
import { fetchQuantityFromCartlS } from "./fetchQuantityFromCartlS";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { incrementDecrement } from "./incrementDecrement";
import { removeTheCardFromCart } from "./removeTheCardFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((currProd) => {
  return cartProducts.some((currElem) => currElem.id === currProd.id);
});

const cardElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((currProd) => {
    const { category, id, image, name, stock, price } = currProd;
    let productClone = document.importNode(templateContainer.content, true);

    const lSActualData = fetchQuantityFromCartlS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productPrice").textContent =
      lSActualData.price;
    productClone.querySelector(".productQuantity").textContent =
      lSActualData.quantity;
    // Remove Button
    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeTheCardFromCart(id));

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) =>
        incrementDecrement(event, id, stock, price)
      );
    cardElement.appendChild(productClone);
  });
};

showCartProduct();

// updateCartProductTotal
updateCartProductTotal();
