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

const productEl = document.querySelector('#featuredproducts');

// RENDER ELEMENTS
function renderProducts() {
  products.forEach((product) => {
    productEl.innerHTML += `
        <div class="pro-container">
        <img src="${product.imgSrc}" alt="" />
        <div class="lower">
          <div class="des">
            <span>adidas</span>
            <p>Cartoon Astronaut T-Shirts</p>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p class="price">$78</p>
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
      console.log(product);
  });
}

renderProducts();

// console.log(product);