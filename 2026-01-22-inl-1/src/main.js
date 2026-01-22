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
        <input type="number" value="3" min="0" id="amount-${currentProduct.id}" disabled>
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

  const decreaseButtons = document.querySelectorAll('#products button.decrease');
  decreaseButtons.forEach((btn) => {
    btn.addEventListener('click', decreaseProductCount);
  });
}

function increaseProductCount(e) {
  const clickedBtnId = e.target.dataset.id;
  const input = document.querySelector(`#amount-${clickedBtnId}`);
  input.value = Number(input.value) + 1;
}

function decreaseProductCount(e) {
  const clickedBtnId = e.target.dataset.id;
  const input = document.querySelector(`#amount-${clickedBtnId}`);

  // Kolla om mindre än 0
  let amount = Number(input.value) - 1;
  if (amount < 0) {
    amount = 0;
  }

  input.value = amount;
}

function addProductToCart(e) {
  const clickedBtnId = Number(e.target.dataset.id);

  const product = products.find(product => product.id === clickedBtnId);

  if (product === undefined) {
    // Vi hittade ingen produkt, avbryt
    return;
  }

  // Kolla hur många produkter som kunden vill beställa
  // från input-fältet
  const inputField = document.querySelector(`#amount-${clickedBtnId}`);
  let amount = Number(inputField.value);
  if (amount < 0) {
    // inputField.value = 0;
    return;
  }

  // Återställ input-fältets värde till 0 efter tryck på köp-knappen
  inputField.value = 0;

  // Kolla om produkten redan finns i varukorgen
  const index = cart.findIndex(product => product.id === clickedBtnId);
  if (index === -1) {
    product.amount = amount;
    cart.push(product);
  } else {
    // Öka antalet i varukorgen istället,
    // produkten finns redan i varukorgen
    product.amount += amount;
  }

  updateCartTotals();

  printCart();
}

const cartTotalEl = document.querySelector('#cartTotal');
function updateCartTotals() {
  // Kolla vilka produkter vi har i varukorgen (loopa igenom)
  // Kolla priset
  // Gångra priset med antalet
  // Plussa ihop alla varors totalpris till en totalsumma för hela varukorgen

  let cartTotal = 0;

  for (let i = 0; i < cart.length; i++) {
    const productSum = cart[i].price * cart[i].amount;
    cartTotal += productSum;
  }

  // Reduce => inbyggd funktion i JS för att summera en array
  // Gör samma som for-loopen här ovan
  /*const cartTotal = cart.reduce((partialSum, product) => {
    return partialSum + (product.price * product.amount);
  }, 0);*/

  cartTotalEl.innerHTML = `${cartTotal} kr`;

  highlightCartTotalChange();
}

function highlightCartTotalChange() {
  cartTotalEl.classList.add('highlight-price');

  const SECONDS_IN_MS = 1000;
  const SECONDS = 1;
  setTimeout(removeCartTotalHighlight, SECONDS_IN_MS * SECONDS);
}

function removeCartTotalHighlight() {
  cartTotalEl.classList.remove('highlight-price');
}

const cartSection = document.querySelector('#cart');
function printCart() {
  cartSection.innerHTML = '';

  // Skriv ut varukorgen
  // Kopplingen till plus och minus av produkter sker via
  // data-id-attributet på <button>
  // Där har vi skrivit ut produktens unika id, som används för att
  // identifiera vilken produkt som ska öka/minska i värde

  for (let i = 0; i < cart.length; i++) {
    cartSection.innerHTML += `
      <article>
        ${cart[i].name}:
        <button data-id="${cart[i].id}" class="decrease-cart-product">-</button>
        ${cart[i].amount} st
        <button data-id="${cart[i].id}" class="increase-cart-product">+</button>
        <button data-id="${i}" class="delete-product">Radera</button>
      </article>
    `;
  }

  const deleteButtons = document.querySelectorAll('button.delete-product');
  deleteButtons.forEach((btn) => {
    btn.addEventListener('click', deleteProductFromCart);
  });

  const cartDecreaseButtons = document.querySelectorAll('button.decrease-cart-product');
  cartDecreaseButtons.forEach((btn) => {
    btn.addEventListener('click', decreaseProductFromCart);
  });

  const cartIncreaseButtons = document.querySelectorAll('button.increase-cart-product');
  cartIncreaseButtons.forEach((btn) => {
    btn.addEventListener('click', increaseProductFromCart);
  });
}

function decreaseProductFromCart(e) {
  // Kolla vilken knapp vi har klickat på, dvs. läs av dess id från "data-id"
  const rowId = Number(e.target.dataset.id);

  // Leta upp produkten i varukorgen som har det id:t
  const product = cart.find(product => product.id === rowId);

  // Vi ska inte kunna beställa negativa värden av produkter
  if (product.amount <= 0) {
    return;
  }
  product.amount -= 1;

  // Skriv ut en uppdaterad varukorg i HTML-strukturen
  printCart();
  updateCartTotals();
}

function increaseProductFromCart(e) {
  // TODO
}

function deleteProductFromCart(e) {
  const rowId = Number(e.target.dataset.id);
  
  cart.splice(rowId, 1);

  printCart();
  updateCartTotals();
}

printProducts();