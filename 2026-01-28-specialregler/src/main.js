import './style.scss';

const SLOWNESS_TIMER_MINUTES = 15;
setTimeout(clearOrder, 1000 * 60 * SLOWNESS_TIMER_MINUTES);
function clearOrder() {
  // sätta order-arrayen till en tom array: [], dvs. ta bort all produkter
  // återställa formuläret med kunduppgifter (clear())

  // window.location.reload();
}

/*
På måndagar innan kl. 10 ges 10 % rabatt på hela beställningssumman. Detta visas i varukorgssammanställningen som en rad med texten "Måndagsrabatt: 10 % på hela beställningen".
*/

// Grundregel: vi börjar alltid räkna från 0 och inte 1

// Hårdkoda in datum medan ni testar men innan slutinlämning så låter ni det bara stå new Date()
const date = new Date(2026, 1, 1, 9, 0);
console.log(date);

/*if (date.getDay() === 1) {
  if (date.getHours() < 10) {
    console.log('det är måndag OCH innan kl. 10');
  }
}*/

let cartSum = 100;
let shippingCost = 25;
let orderProductCount = 5;


function calculateShipping() {
  if (orderProductCount > 15) {
    shippingCost = 0;
  } else {
    shippingCost = 25 + (0.1 * cartSum);
  }

  document.querySelector('#shippingCost').innerHTML = `Fraktkostnad: ${shippingCost} kr`;
}
calculateShipping();

const MONDAY = 1;
if (date.getDay() === MONDAY && date.getHours() < 10) {
  // cartSum = cartSum * 0.9; // 100 - 10% => 90%
  cartSum *= 0.9;
  // cartSum = cartSum - (cartSum * 0.1);
  document.querySelector('#discount').innerHTML = 'Måndagsrabatt: 10 % på hela beställningen.';
}

document.querySelector('#cartTotalHeader').innerHTML = `${cartSum} kr`;
document.querySelector('#cartTotal').innerHTML = `${cartSum} kr`;
// sön = 0
// lör = 6
// console.log(date.getDay());


// VÄXLA MELLAN KORT OCH FAKTURA
const cardRadioBtn = document.querySelector('input[type="radio"].card');
const invoiceRadioBtn = document.querySelector('input[type="radio"].invoice');
cardRadioBtn.addEventListener('change', toggleInvoiceOrCardPayment);
invoiceRadioBtn.addEventListener('change', toggleInvoiceOrCardPayment);

function toggleInvoiceOrCardPayment(e) {
  const selectedPaymentMethod = e.target.value;

  if(selectedPaymentMethod === 'invoice') {
    document.querySelector('#invoicePayment').classList.remove('hidden');
    document.querySelector('#cardPayment').classList.add('hidden');
  } else {
    document.querySelector('#invoicePayment').classList.add('hidden');
    document.querySelector('#cardPayment').classList.remove('hidden');
  }
}