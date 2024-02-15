import { filterContractors } from './filter.js';
import { isDataEmpty } from '../utilities/error-messages.js';
import { provideContractorsData } from '../data/server-data.js';
import { userListContainer, renderContractor } from './render-data.js';
// import { renderMap } from '../map/render-map.js';

const checkboxVerified = document.querySelector('#checked-users');

let filteredContractors;
let currentItems;

const renderFilteredList = (contractors) => {
  userListContainer.innerHTML = '';
  currentItems = contractors;
  filteredContractors = filterContractors(currentItems);
  filteredContractors.forEach((contractor) => {
    renderContractor(contractor);
    // renderMap(contractor);
  });
  if (filteredContractors.length === 0) {
    isDataEmpty();
  }
};

const onCheckboxChange = () => renderFilteredList(currentItems);

const onBuySellClick = () => renderFilteredList(currentItems);

const renderListOfContractors = () => {
  provideContractorsData();
  checkboxVerified.addEventListener('change', onCheckboxChange);
};

export { renderFilteredList, onBuySellClick, renderListOfContractors };
