import './style.css';

const products = [
  {
    name: 'Kaffe',
    price: 69,
    rating: 4,
    category: 'drinks',
    img: 'coffee.jpg',
  },
  {
    name: 'Kaffemaskin',
    price: 399,
    rating: 3,
    category: 'utilities',
    img: 'coffeemachine.jpg',
  },
  {
    name: 'Kaffefilter',
    price: 20,
    rating: 1,
    category: 'accessories',
    img: 'coffeefilter.jpg',
  },
  {
    name: 'Mörkrost',
    price: 89,
    rating: 5,
    category: 'drinks',
    img: 'coffee.jpg',
  },
];

let filteredProducts = Array.from(products);
const productsListing = document.querySelector('#products');

// -------------------------------------------------------
// --------------------------- FILTER BUTTONS ------------
// -------------------------------------------------------
const utilsFilterBtn = document.querySelector('#utilsFilterBtn');
const accessoriesFilterBtn = document.querySelector('#accessoriesFilterBtn');
const showAllFilterBtn = document.querySelector('#showAllFilterBtn');

utilsFilterBtn.addEventListener('click', filterProductsListByUtilsCategory);
accessoriesFilterBtn.addEventListener('click', filterProductsListByAccessoriesCategory);
showAllFilterBtn.addEventListener('click', showAllProducts);

function showAllProducts() {
  filteredProducts = Array.from(products);
  printProducts();
}

function filterProductsListByUtilsCategory() {
  filteredProducts = products.filter((product) => product.category === 'utilities');
  printProducts();
}

function filterProductsListByAccessoriesCategory() {
  filteredProducts = products.filter((product) => product.category === 'accessories');
  printProducts();
}

// Ett alternativt sätt att gruppera "information"
const drinksFilterBtn = document.querySelector('#drinksFilterBtn');
drinksFilterBtn.addEventListener('click', filterProductsListByDrinksCategory);

function filterProductsListByDrinksCategory() {
  filteredProducts = products.filter((product) => product.category === 'drinks');
  printProducts();
}

function printProducts() {
  productsListing.innerHTML = '';

  for (let i = 0; i < filteredProducts.length; i++) {
    const currentProduct = filteredProducts[i];

    const html = `
      <article>
        <h3>${currentProduct.name}</h3>
        <div class="metadata">
          <p>Pris: ${currentProduct.price} kr</p>
          <p>Betyg: ${currentProduct.rating}/5</p>
        </div>
        <p>${currentProduct.category}</p>
      </article>
    `;

    productsListing.innerHTML += html;
  }
}

printProducts();