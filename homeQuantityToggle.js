export const homeQuantityToggle = (e, id, stock) => {
  const currProductElement = document.querySelector(`#card${id}`);
  //   console.log(currProductElement);

  const productQuantity = currProductElement.querySelector(".productQuantity");

  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;
  //   console.log(quantity);

  if (e.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }
  if (e.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  productQuantity.innerText = quantity;
  //   console.log(quantity);
  productQuantity.setAttribute("data-quantity", quantity.toString());
  return quantity;
};
