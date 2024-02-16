import { filterContractors } from './filter.js';
import { isDataEmpty } from '../utilities/error-messages.js';
import { provideContractorsData } from '../data/server-data.js';
import { userListContainer, renderContractor } from './render-data.js';
import { createMarker, clearMarkers } from '../map/create-markers.js';

const checkboxVerified = document.querySelector('#checked-users');

let filteredContractors;
let currentItems;

const renderFilteredList = (contractors) => {
  userListContainer.innerHTML = '';
  currentItems = contractors;
  filteredContractors = filterContractors(currentItems);
  filteredContractors.forEach((contractor) => {
    renderContractor(contractor);
    if (contractor.coords) {
      createMarker(contractor);
    }
  });
  if (filteredContractors.length === 0) {
    isDataEmpty();
  }
};

const onCheckboxChange = () => {
  clearMarkers();
  renderFilteredList(currentItems);
};

const onBuySellClick = () => {
  clearMarkers();
  renderFilteredList(currentItems);
};

const renderListOfContractors = () => {
  provideContractorsData();
  checkboxVerified.addEventListener('change', onCheckboxChange);
};

export { renderFilteredList, onBuySellClick, renderListOfContractors };
