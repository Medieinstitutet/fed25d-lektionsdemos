import './style.css';
/*
Kolla så man har en kaffemaskin
Kolla att det finns kaffe
Kollar om man har mjölk ifall man tycker om det
Kollar om man har socker ifall man vill ha det
Kollar så att man har en ren kaffekopp
Koppla in kaffemaskinen
Kontrollera så att den funkar
Rensa eller tömma kaffemaskinen
Sätter i ett filter
Lägger kaffepulver i filter
Hälla i vatten i kaffekokaren
Tryck på på/av knappen
Ta fram kopp
Ta fram mjölk och socker
Häll kaffet i kopp och blanda
*/

const coffeeMachineWorks = document.querySelector('#coffeeMachineWorks');

const groundCoffeeExists = document.querySelector('#groundCoffeeExists');

const brewBtnContainer = document.querySelector('#brewBtnContainer');

if (coffeeMachineWorks !== null) {
  coffeeMachineWorks.addEventListener('change', checkPreconditions);
}

groundCoffeeExists.addEventListener('change', checkPreconditions);

function checkPreconditions() {
  brewBtnContainer.classList.add('hidden');

  if (coffeeMachineWorks.checked === false) {
    return; // Return early
  }

  if (!groundCoffeeExists.checked) {
    // Vi har inget kaffepulver, så vi kan inte
    // brygga nåt kaffe, avbryt
    // Skippa att köra resten av koden för det är onödigt
    return;
  }

  brewBtnContainer.classList.remove('hidden');

  const btn = brewBtnContainer.querySelector('button');
  btn.addEventListener('click', brewCoffee);
}

function brewCoffee() {
  const SECONDS = 2;
  setTimeout(alertCoffeeReady, SECONDS * 1000);
}

function alertCoffeeReady() {
  alert('Kaffet klart!');
}