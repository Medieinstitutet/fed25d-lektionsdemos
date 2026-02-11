import './style.css';
import { type IBudgetItem } from './models';

const budgetItems: IBudgetItem[] = [];
const budgetForm: HTMLFormElement | null = document.querySelector('#budgetForm');

// const budgetForm = document.querySelector<HTMLFormElement>('#budgetForm');
// const budgetForm = document.querySelector('#budgetForm') as HTMLFormElement;

if (budgetForm) {
  budgetForm.addEventListener('submit', registerBudgetItem); 
}

// budgetForm!.addEventListener('submit', registerBudgetItem);
// ! => color: red !important;

// Om du vill stänga av fel som du inte vet hur du ska fixa: @ts-expect-error orkar inte
function registerBudgetItem(e: SubmitEvent) {
  e.preventDefault();

  const budgetData = new FormData(budgetForm!);
  
  const formFields: IBudgetItem = Object.fromEntries(budgetData.entries()) as unknown as IBudgetItem;

  budgetItems.push(formFields);
  printBudgetItems();
}

function printBudgetItems() {
  const budgetItemsDiv: HTMLDivElement | null = document.querySelector('#budgetItemsList');

  if(!budgetItemsDiv) {
    return;
  }

  budgetItemsDiv.innerHTML = '';

  let html = '';

  budgetItems.forEach((item) => {
    html += `<p>${item.desc} - ${item.amount} - ${item.type}</p>`; 
  });

  budgetItemsDiv.innerHTML = html;
}