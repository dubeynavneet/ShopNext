import products from "./api/products.json" assert { type: "json" };
import { showProductContainer } from "./homeProduct.js";
// console.log(products);
// fetch("./api/products.json")
//   .then((response) => response.json())
//   .then((products) => {
//     console.log(products);
//   })
//   .catch((error) => {
//     console.error("Error fetching products:", error);
//   });

// call the fun to display all the cards
showProductContainer(products);
