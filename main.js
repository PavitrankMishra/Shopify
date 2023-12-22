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
// console.log(productEl);

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
    // console.log(product.id);
  });
}
renderExtraProducts();

/********************* Starting Feature **************** */
const featuresApp = document.querySelector("#feature");

function renderFeatures() {
  features.forEach((feature) => {
    featuresApp.innerHTML += 
    `<div class="fe-box">
    <img src="${feature.imgSrc}" alt="" />
    <p>"${feature.desc}"</p>
  </div>
  `;
  // console.log(feature);
  
  })
}
renderFeatures();

/************************ 1st Banner ******************** */
const firstBanner = document.querySelector("#sm-banner");

function renderBanner() {
  smallBanner.forEach((small) => {
    firstBanner.innerHTML += 
    `
    <div class="${small.id}">
        <h4>${small.name}</h4>
        <p>${small.offer}</p>
        <span>${small.desc}</span>
        <button class="white">${small.btn}</button>
      </div>
    `;
  });
}

renderBanner();

/************************ 2nd Banner *************** */
const bannerDescription = document.querySelector("#new-banner");

function renderbanner() {
  banner.forEach((banners) => {
    bannerDescription.innerHTML += `
    <div class="banner-${banners.id}">
    <h2>${banners.desc1}</h2>
    <h3>${banners.desc2}</h3>
  </div>
    `;
  }); 
}

renderbanner();
