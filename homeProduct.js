import { addToCart } from "./addtoCart.js";
import { homeQuantityToggle } from "./homeQuantityToggle.js";

const productContainer = document.getElementById("productContainer");
const productTemplate = document.getElementById("productTemplate");

export const showProductContainer = (products) => {
  if (!products) return;

  products.map((curProd) => {
    const { brand, category, description, id, image, name, price, stock } =
      curProd;

    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productActualPrice").textContent = `₹${
      4 * price
    }`;

    // productClone.querySelector(".productActuallPrice").textContent = price;
    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (e) => {
        homeQuantityToggle(e, id, stock);
      });

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (e) => {
        addToCart(e, id, stock);
      });

    productContainer.append(productClone);
  });
};
