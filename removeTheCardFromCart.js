import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeTheCardFromCart = (id) => {
  let cartProducts = getCartProductFromLS();

  cartProducts = cartProducts.filter((item) => item.id !== id);
  localStorage.setItem("cartproductLS", JSON.stringify(cartProducts));

  // to remove the div on click
  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();
    showToast("delete", id);
  }

  updateCartValue(cartProducts);
  updateCartProductTotal();
};
