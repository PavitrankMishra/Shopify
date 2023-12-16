console.log("Shopify website");

let iconBag =  document.querySelector('.bag');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');

iconBag.addEventListener('click', () => {
    console.log("Toggle show cart");
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    console.log("Showcart close");
    body.classList.toggle('showCart');
})
