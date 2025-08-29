/** In this file we want to get the access of the whole source code of the products app */

import { mount as ProductMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartIndex";

/** Mounting the products application data inside the container app */
ProductMount(document.querySelector("#container-products"));
cartMount(document.querySelector("#container-cart"));
