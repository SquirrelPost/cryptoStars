// import {renderContractors} from '../contractors/render-data.js';

// const iconConfig = {
//   url: './img/pin.svg',
//   width: 36,
//   height: 46,
//   anchorX: 18,
//   anchorY: 46,
// };
// // const iconVerifiedConfig = {
// //   url: './img/pin-verified.svg',
// // };

// const mapContainer = document.querySelector('.map');
// const map = L.map(mapContainer);

// const createPinIcon = () => L.icon({
//   iconUrl: iconConfig.url,
//   iconSize: [iconConfig.width, iconConfig.height],
//   iconAnchor: [iconConfig.anchorX, iconConfig.anchorY],
// });

// // const createVerifiedPinIcon = () => L.icon({
// //   iconUrl: iconVerifiedConfig.url,
// // });

// const markersGroup = L.layerGroup().addTo(map);

// const clearMarkers = () => {
//   markersGroup.clearLayers();
// };

// const createSimilarMarker = (data) => L.marker(data.coords, {
//   icon: createPinIcon(),
// }).addTo(markersGroup)
//   .bindPopup(renderContractors(data));


// export {map, createSimilarMarker, clearMarkers};

// import { getData } from '../data/server-data.js';
// import { createSimilarMarker, /*clearMarkers*/ } from '../map/create-map.js';

// const DATA_URL = 'https://cryptostar.grading.htmlacademy.pro/contractors';

// let currentsMarkers;


// const filtrateContractors = () => {
// // не сделано!!!
// };

// const createMarkers = (data) => {
//   currentsMarkers = data;
//   filtrateContractors(currentsMarkers).forEach((contractor) => createSimilarMarker(contractor));
// };

// // const changeFilters = (() => {
// //   clearMarkers();
// //   filtrateContractors(currentsMarkers).forEach((data) => createSimilarMarker(data));
// // });

// // const onFilterChange = changeFilters();

// const initSimilarMarkers = () => getData(DATA_URL, createMarkers);

// export {initSimilarMarkers/*, onFilterChange, changeFilters, createMarkers*/};


// import { map } from './create-map.js';
// import { initSimilarMarkers, /*onFilterChange, changeFilters*/ } from '../contractors/filter.js';

// const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// const ZOOM = 13;
// const CITY_CENTER = {
//   lat: 59.92749,
//   lng: 30.31127,
// };

// const renderMap = () => {
//   map.on('load', () => {
//     initSimilarMarkers();
//     // filtersForm.addEventListener('change', onFilterChange);
//   }).setView(CITY_CENTER, ZOOM);

//   L.tileLayer(TILE_LAYER, {
//     attribution: COPYRIGHT
//   }).addTo(map);
// };

// const resetMap = () => {
//   map.closePopup();
//   map.setView(CITY_CENTER, ZOOM);
//   // filtersForm.reset();
//   // changeFilters();
// };

// export {renderMap, resetMap};
