import {renderContractors} from '../data/render-data.js';

const iconConfig = {
  url: './img/pin.svg',
  width: 36,
  height: 46,
  anchorX: 18,
  anchorY: 46,
};
// const iconVerifiedConfig = {
//   url: './img/pin-verified.svg',
// };

const mapContainer = document.querySelector('.map');
const map = L.map(mapContainer);

const createPinIcon = () => L.icon({
  iconUrl: iconConfig.url,
  iconSize: [iconConfig.width, iconConfig.height],
  iconAnchor: [iconConfig.anchorX, iconConfig.anchorY],
});

// const createVerifiedPinIcon = () => L.icon({
//   iconUrl: iconVerifiedConfig.url,
// });

const markersGroup = L.layerGroup().addTo(map);

const clearMarkers = () => {
  markersGroup.clearLayers();
};

const createSimilarMarker = (data) => L.marker(data.coords, {
  icon: createPinIcon(),
}).addTo(markersGroup)
  .bindPopup(renderContractors(data));


export {map, createSimilarMarker, clearMarkers};
