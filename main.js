// console.log("Shopify website");

// let iconBag =  document.querySelector('.bag');
// let body = document.querySelector('body');
// let closeCart = document.querySelector('.close');

// iconBag.addEventListener('click', () => {
//     console.log("Toggle show cart");
//     body.classList.toggle('showCart');
// })
// closeCart.addEventListener('click', () => {
//     console.log("Showcart close");
//     body.classList.toggle('showCart');
// })

// SELECT ELEMENTS

const productEl = document.querySelector(".container");

// RENDER ELEMENTS
function renderProducts() {
  products.forEach((product) => {
    if (product.id >= 9) {
      return;
    }
    productEl.innerHTML += `
        <div class="pro-container">
        <img src="${product.imgSrc}" alt="" />
        <div class="lower">
          <div class="des">
            <span>${product.name}</span>
            <p>Cartoon Astronaut T-Shirts</p>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p class="price">$ ${product.price}</p>
          </div>
          <div class="cart">
            <a href="cart.html">
              <img
                src="img/shopping_cart_FILL0_wght400_GRAD0_opsz24.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      `;
  });
}

renderProducts();

const productEl2 = document.querySelector("#new-container");

function renderExtraProducts() {
  products.forEach((product) => {
    if (product.id <= 8) {
      return;
    }

    productEl2.innerHTML += `<div class="pro-container">
    <img src="${product.imgSrc}" alt="" />
    <div class="lower">
      <div class="des">
        <span> ${product.name}</span>
        <p>Cartoon Astronaut T-Shirts</p>
        <div class="star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <p class="price">$ ${product.price}</p>
      </div>
      <div class="cart">
        <a href="cart.html">
          <img
            src="img/shopping_cart_FILL0_wght400_GRAD0_opsz24.png"
            alt=""
          />
        </a>
      </div>
    </div>
  </div>`;
    console.log(product.id);
  });
}

renderExtraProducts();
