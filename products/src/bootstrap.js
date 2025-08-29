import faker from "faker";

// let products = "";

// for (let i = 0; i < 5; i++) {
//   const name = faker.commerce.productName();
//   products += `<div>${name}</div>`;
// }

// document.querySelector("#dev-products").innerHTML = products;

export const mount = (element) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  element.innerHTML = products;
};

/** To check if our project products is running in isolation */
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  /**
   *  Assuming that only the products have an element with id of "dev-products"
   * And the container application does not have it.
   *
   */
  if (el) {
    /** we are running products in isolation */
    mount(el);
  }
}
