import { products } from "./data.js";
const product = JSON.parse(products);
const productBox = document.querySelector('.productions');
const productBox2 = document.querySelector('.product_box');
product.forEach(({name, image, price, disclaimer}) => {
    const productEl = `<div class="product">
    <div><img src="${image}"/></div>
    <h4 class="name">${name}</h4>
    <p class="disclaimer">${disclaimer}</p>
    <p class="price"> $ ${price}</p>
  </div>`
  productEl.set
  productBox.insertAdjacentHTML("beforeend", productEl);
    });

    const productCart = document.querySelectorAll(".product");
    productCart.forEach(cart => {cart.addEventListener('click', (e) => {
      
      product.forEach(({name, image, price, color, size, quantity}) => {
        const productEl2 =` 
        <div class="product">
            <button class="btn_del" type="button">Удалить</button>
            <div class="product_content">
              <img class="product_img" src="${image}" alt="${name}" srcset="" />
              <div class="product_desc">
                <h2 class="product_name">${name}</h2>
                <p class="product_price_lable">
                  Price:<span class="product_price"> ${price}</span>
                </p>
                <p class="product_color">Color: ${color}</p>
                <p class="product_size">Size: ${size}</p>
                <div class="product_qty">
                  <label class="input_label">Quantity:</label>
                  <input class="input_quantity" type="number" value="${quantity}">
                   </div>
              </div>
            </div>
          </div>`;
          productBox2.insertAdjacentHTML('afterend', productEl2)
         
          
      });
      const qntMin = document.querySelector(".input_quantity")
      if (qntMin < 1) {
        qntMin.parentNode.remove()
      }
      
      const deleteButtons = document.querySelectorAll('.btn_del');
      deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            product.parentElement.remove();
        })
      })

    })
      
    });
    
 



