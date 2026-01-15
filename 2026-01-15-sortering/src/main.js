import './style.css';

const products = [
  {
    name: 'Mörkrost',
    price: 89,
    rating: 5,
    category: 'drinks',
    img: 'coffee.jpg',
  },
  {
    name: 'kaffe',
    price: 69,
    rating: 4,
    category: 'drinks',
    img: 'coffee.jpg',
  },
  {
    name: 'Kaffet',
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

// -------------------------------------------------------
// --------------------------- SORT BUTTONS --------------
// -------------------------------------------------------
const sortByNameBtn = document.querySelector('#sortByNameBtn');
sortByNameBtn.addEventListener('click', sortByName);

const sortByPriceBtn = document.querySelector('#sortByPriceBtn');
sortByPriceBtn.addEventListener('click', sortByPrice);

function sortByPrice() {
  filteredProducts.sort((product1, product2) => product1.price < product2.price);
  printProducts();
}

function sortByName() {
  filteredProducts.sort((product1, product2) => {
    const product1Name = product1.name.toUpperCase();
    const product2Name = product2.name.toUpperCase();
    if (product1Name < product2Name) {
      return -1;
    }
    if (product1Name > product2Name) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  
  printProducts();
}

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