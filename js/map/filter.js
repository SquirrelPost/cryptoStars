import { getData } from '../data/server-data.js';
import { createSimilarMarker, /*clearMarkers*/ } from './create-map.js';

const DATA_URL = 'https://cryptostar.grading.htmlacademy.pro/contractors';

let currentsMarkers;


const filtrateContractors = () => {
// не сделано!!!
};

const createMarkers = (data) => {
  currentsMarkers = data;
  filtrateContractors(currentsMarkers).forEach((contractor) => createSimilarMarker(contractor));
};

// const changeFilters = (() => {
//   clearMarkers();
//   filtrateContractors(currentsMarkers).forEach((data) => createSimilarMarker(data));
// });

// const onFilterChange = changeFilters();

const initSimilarMarkers = () => getData(DATA_URL, createMarkers);

export {initSimilarMarkers/*, onFilterChange, changeFilters, createMarkers*/};
