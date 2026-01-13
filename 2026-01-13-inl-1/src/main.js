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
];

const productsListing = document.querySelector('#products');

for (let i = 0; i < products.length; i++) {
  const currentProduct = products[i];

  const html = `
    <article>
      <h2>${currentProduct.name}</h2>
      <div class="metadata">
        <p>Pris: ${currentProduct.price} kr</p>
        <p>Betyg: ${currentProduct.rating}/5</p>
      </div>
      <p>${currentProduct.category}</p>
    </article>
  `;

  productsListing.innerHTML += html;
}