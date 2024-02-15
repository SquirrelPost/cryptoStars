import { filterContractors } from '../contractors/filter.js';
import { isDataEmpty } from '../utilities/error-messages.js';
import { provideContractorsData } from '../data/server-data.js';

const userListContainer = document.querySelector('.users-list__table-body');
const userListTemplate = document.querySelector('#user-table-row__template')
  .content.querySelector('.users-list__table-row');
const checkboxVerified = document.querySelector('#checked-users');

let maxAmount;
let filteredContractors;
let currentItems;
let dataContractors = [];

const checkVerified = (userTableRow, isVerified) => {
  if (isVerified) {
    userTableRow.querySelector('#user-list__icon-verified').style.removeProperty('display');
  } else {
    userTableRow.querySelector('#user-list__icon-verified').style.display = 'none';
  }
};

const calcMaxAmount = (balance, exchangeRate, status) => {
  if (status === 'buyer') {
    maxAmount = Math.round(balance.amount);
  }
  if (status === 'seller') {
    maxAmount = Math.round(balance.amount * exchangeRate);
  }
  return maxAmount;
};

const renderPayments = (userTableRow, paymentMethods) => {
  const paymentMethodsList = userTableRow.querySelector('.users-list__badges-list');
  paymentMethodsList.innerHTML = '';

  const rewriteMethodItem = (method) => {
    const paymentMethodsItem = document.createElement('li');
    paymentMethodsItem.classList.add('users-list__badges-item');
    paymentMethodsItem.classList.add('badge');
    paymentMethodsItem.textContent = method.provider;
    paymentMethodsList.append(paymentMethodsItem);
  };
  paymentMethods.forEach((method) => rewriteMethodItem(method));
};

const renderContractor = (data) => {
  const { balance, exchangeRate, isVerified, minAmount, paymentMethods, status, userName } = data;
  const userTableRow = userListTemplate.cloneNode(true);
  userTableRow.querySelector('.users-list__table-name span').textContent = userName;
  checkVerified(userTableRow, isVerified);
  userTableRow.querySelector('.users-list__table-currency').textContent = balance.currency;
  userTableRow.querySelector('.users-list__table-exchangerate').textContent = `${exchangeRate} ₽`;
  userTableRow.querySelector('.users-list__table-cashlimit').textContent =
    `${minAmount} ₽ - ${calcMaxAmount(balance, exchangeRate, status)} ₽`;

  if (paymentMethods) {
    renderPayments(userTableRow, paymentMethods);
  } else {
    userTableRow.querySelector('.users-list__badges-list').remove();
  }

  const userListFragment = document.createDocumentFragment();
  userListFragment.append(userTableRow);
  userListContainer.append(userListFragment);
};

const onCheckboxChange = () => {
  userListContainer.innerHTML = '';
  filterContractors(currentItems).forEach((contractor) => {
    renderContractor(contractor);
  });
};

const renderFilteredList = (contractors) => {
  currentItems = contractors;
  filteredContractors = filterContractors(currentItems);
  filteredContractors.forEach((contractor) => {
    renderContractor(contractor);
  });
  if (filteredContractors.length === 0) {
    isDataEmpty();
  }
};

const createList = (contractors) => {
  dataContractors = contractors;
  renderFilteredList(contractors);
};

const initSimilarItems = () => provideContractorsData();

const renderListOfContractors = () => {
  initSimilarItems();
  checkboxVerified.addEventListener('change', onCheckboxChange);
};

export { createList, renderListOfContractors };
