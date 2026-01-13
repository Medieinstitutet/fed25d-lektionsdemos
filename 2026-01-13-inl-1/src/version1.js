const coffee = {
  name: 'Kaffe',
  price: 69,
  rating: 4,
  category: 'drinks',
  img: 'coffee.jpg',
};
const coffeeMachine = {
  name: 'Kaffemaskin',
  price: 399,
  rating: 3,
  category: 'utilities',
  img: 'coffeemachine.jpg',
};
const coffeeFilter = {
  name: 'Kaffefilter',
  price: 20,
  rating: 1,
  category: 'accessories',
  img: 'coffeefilter.jpg',
};

const productsListing = document.querySelector('#products');

productsListing.innerHTML += coffee.name + "<br>";
productsListing.innerHTML += coffee.price + "<br>";
productsListing.innerHTML += coffee.rating + "<br>";
productsListing.innerHTML += coffee.category + "<br>";

productsListing.innerHTML += coffeeMachine.name + "<br>";
productsListing.innerHTML += coffeeMachine.price + "<br>";
productsListing.innerHTML += coffeeMachine.rating + "<br>";
productsListing.innerHTML += coffeeMachine.category + "<br>";

productsListing.innerHTML += coffeeFilter.name + "<br>";
productsListing.innerHTML += coffeeFilter.price + "<br>";
productsListing.innerHTML += coffeeFilter.rating + "<br>";
productsListing.innerHTML += coffeeFilter.category + "<br>";