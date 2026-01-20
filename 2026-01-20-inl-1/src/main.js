import './style.css';
import products from './products.mjs';

const cart = [];

let filteredProducts = Array.from(products);
const productsListing = document.querySelector('#products');

function printProducts() {
  productsListing.innerHTML = '';

  let html = '';

  for (let i = 0; i < filteredProducts.length; i++) {
    const currentProduct = filteredProducts[i];

    html += `
      <article>
        <h3>${currentProduct.name}</h3>
        <p>ID: ${currentProduct.id}</p>
        <div class="metadata">
          <p>Pris: ${currentProduct.price} kr</p>
          <p>Betyg: ${currentProduct.rating}/5</p>
        </div>
        <p>${currentProduct.category}</p>
        <button class="decrease" data-id="${currentProduct.id}">-</button>
        <input type="number" id="amount-${currentProduct.id}" disabled>
        <button class="increase" data-id="${currentProduct.id}">+</button>
        <button class="buy" data-id="${currentProduct.id}">Köp</button>
      </article>
    `;
  }

  productsListing.innerHTML = html;

  const buyButtons = document.querySelectorAll('#products button.buy');
  buyButtons.forEach((btn) => {
    btn.addEventListener('click', addProductToCart);
  });

  const increaseButtons = document.querySelectorAll('#products button.increase');
  increaseButtons.forEach((btn) => {
    btn.addEventListener('click', increaseProductCount);
  });
}

function increaseProductCount(e) {
  const clickedBtnId = e.target.dataset.id;
  const input = document.querySelector(`#amount-${clickedBtnId}`);
  input.value = Number(input.value) + 1;
}

function addProductToCart(e) {
  const clickedBtnId = Number(e.target.dataset.id);

  const product = products.find(product => product.id === clickedBtnId);

  if (product === undefined) {
    // Vi hittade ingen produkt, avbryt
    return;
  }

  // const index = LOOKUP_OBJECT.findIndex(item => item.PROPERTY === LOOKUP_VALUE);

  // Kolla om produkten redan finns i varukorgen
  const index = cart.findIndex(product => product.id === clickedBtnId);
  if (index === -1) {
    product.amount = 1;
    cart.push(product);
  } else {
    // Öka antalet i varukorgen istället,
    // produkten finns redan i varukorgen
    product.amount += 1;
  }

  printCart();
}

const cartSection = document.querySelector('#cart');
function printCart() {
  cartSection.innerHTML = '';

  for (let i = 0; i < cart.length; i++) {
    cartSection.innerHTML += `
      <p>${cart[i].name}: ${cart[i].amount} st</p>
    `;
  }
}

printProducts();