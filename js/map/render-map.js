import { map } from './create-map.js';
import { initSimilarMarkers, /*onFilterChange, changeFilters*/ } from './filter.js';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const ZOOM = 13;
const CITY_CENTER = {
  lat: 59.92749,
  lng: 30.31127,
};

const renderMap = () => {
  map.on('load', () => {
    initSimilarMarkers();
    // filtersForm.addEventListener('change', onFilterChange);
  }).setView(CITY_CENTER, ZOOM);

  L.tileLayer(TILE_LAYER, {
    attribution: COPYRIGHT
  }).addTo(map);
};

const resetMap = () => {
  map.closePopup();
  map.setView(CITY_CENTER, ZOOM);
  // filtersForm.reset();
  // changeFilters();
};

export {renderMap, resetMap};
