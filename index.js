import { products } from "./data.js";
const product = JSON.parse(products);
const productBox = document.querySelector('.productions');
product.forEach(({name, image, price, disclaimer}) => {
    const productEl = `<div class="product">
    <div><img src="${image}"/></div>
    <h4 class="name">${name}</h4>
    <p class="disclaimer">${disclaimer}</p>
    <p class="price"> $ ${price}</p>
  </div>`
  productBox.insertAdjacentHTML("beforeend", productEl);
});