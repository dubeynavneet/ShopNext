import products from "./api/products.json" assert { type: "json" };
import { showProductContainer } from "./homeProduct";

showProductContainer(products);
