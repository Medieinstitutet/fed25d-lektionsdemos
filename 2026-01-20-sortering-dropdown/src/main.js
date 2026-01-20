import './style.css';

/**
 * HTML => så mycket ni bara kan
 * CSS => fortsätt med CSS
 * JS => JS i sista hand
 */

const products = [
  {
    name: 'Mörkrost',
    price: 89,
    rating: 5,
    category: 'drinks',
    img: {
      src: '/img/kobby-mendez-q54Oxq44MZs-unsplash.jpg',
      width: 3360,
      height: 4200,
      alt: 'En hög med tre staplade munkar som lutar lätt. Munkarna ligger på en tallrik.'
    },
  },
  {
    name: 'kaffe',
    price: 69,
    rating: 4,
    category: 'drinks',
    img: '',
    imgAlt: 'sldlsdldslds',
    imgWidth: 100,
    imgHeight: 100,
  },
  {
    name: 'Kaffet',
    price: 69,
    rating: 4,
    category: 'drinks',
    img: '',
  },
  {
    name: 'Kaffemaskin',
    price: 399,
    rating: 3,
    category: 'utilities',
    img: '',
  },
  {
    name: 'Kaffefilter',
    price: 20,
    rating: 1,
    category: 'accessories',
    img: '',
  },
];

/*
Kan du visa hur man gör en dropdown lista med sorteringsalternativ istället för knappar?
T.ex. sortera efter lägst pris först

Samt visa hur man kan kombinera detta med filtrering?
T.ex. produkter filtrerat på en viss kategori och sedan sortera dessa med lägst pris först
*/

let filteredProducts = Array.from(products);
const productsListing = document.querySelector('#products');

// -------------------------------------------------------
// --------------------------- FILTER DROPDOWN -----------
// -------------------------------------------------------
const filterList = document.querySelector('#filterList');
filterList.addEventListener('change', filterProducts);

function filterProducts() {
  const selectedFilterValue = filterList.value;

  if (selectedFilterValue === 'all') {
    filteredProducts = [...products];
  } else {
    // filteredProducts = products.filter((product) => product.category === selectedFilterValue);
    filteredProducts = products.filter((product) => {
      return product.category === selectedFilterValue;
    });
  }

  printProducts();
}

// -------------------------------------------------------
// --------------------------- SORT DROPDOWN -------------
// -------------------------------------------------------
const sortListByPrice = document.querySelector('#sortListByPrice');
sortListByPrice.addEventListener('change', sortProducts);

function sortProducts() {
  const selectedSortValue = sortListByPrice.value;

  if (selectedSortValue === 'low') {
    filteredProducts.sort((product1, product2) => product1.price > product2.price);
  } else {
    filteredProducts.sort((product1, product2) => product1.price < product2.price);
  }

  printProducts();
}



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

    let imgHtml = '';
    if (currentProduct.img !== '') {
      imgHtml = `<div class="product-image"><img 
        src="${currentProduct.img.src}"
        width="${currentProduct.img.width}"
        height="${currentProduct.img.height}"
        alt="${currentProduct.img.alt}"
        loading="lazy"
        ></div>`;
    }

    const html = `
      <article>
        ${imgHtml}
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