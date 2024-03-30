import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();
export const addToCart = (e, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProductElem = document.querySelector(`#card${id}`);
  let quantity = currentProductElem.querySelector(".productQuantity").innerText;
  let price = currentProductElem.querySelector(".productPrice").innerText;

  price = price.replace("₹", "");

  let existingProd = arrLocalStorageProduct.find(
    (currProd) => currProd.id === id
  );

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = price * quantity;
    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorageProduct.map((currProd) =>
      currProd.id === id ? updatedCart : currProd
    );

    localStorage.setItem("cartproductLS", JSON.stringify(updatedCart));
    showToast("add", id);
  }

  if (existingProd) return false;

  price = Number(price * quantity);
  quantity = Number(quantity);
  let updateCart = { id, quantity, price };
  arrLocalStorageProduct = [...arrLocalStorageProduct, updateCart];
  // arrLocalStorageProduct.push(updateCart);
  localStorage.setItem("cartproductLS", JSON.stringify(arrLocalStorageProduct));
  // console.log(quantity, price);

  // update the cart button value
  updateCartValue(arrLocalStorageProduct);
  showToast("add", id);
};
