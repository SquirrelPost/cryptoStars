import { renderPopup } from './render-popup.js';

const iconConfig = {
  url: './img/pin.svg',
  width: 36,
  height: 46,
  anchorX: 18,
  anchorY: 46,
};
const iconVerifiedConfig = {
  url: './img/pin-verified.svg',
  width: 36,
  height: 46,
  anchorX: 18,
  anchorY: 46,
};

const mapContainer = document.querySelector('.map');
const map = L.map(mapContainer);

const createPinIcon = () => L.icon({
  iconUrl: iconConfig.url,
  iconSize: [iconConfig.width, iconConfig.height],
  iconAnchor: [iconConfig.anchorX, iconConfig.anchorY],
});

const createVerifiedPinIcon = () => L.icon({
  iconUrl: iconVerifiedConfig.url,
  iconSize: [iconVerifiedConfig.width, iconVerifiedConfig.height],
  iconAnchor: [iconVerifiedConfig.anchorX, iconVerifiedConfig.anchorY],
});

const markersGroup = L.layerGroup().addTo(map);

const clearMarkers = () => {
  markersGroup.clearLayers();
};

const createVerifiedMarker = (data) => L.marker(data.coords, {
  icon: createVerifiedPinIcon(),
}).addTo(markersGroup)
  .bindPopup(renderPopup(data));

const createAverageMarker = (data) => L.marker(data.coords, {
  icon: createPinIcon(),
}).addTo(markersGroup)
  .bindPopup(renderPopup(data));

const createMarker = (data) => {
  if (data.isVerified) {
    createVerifiedMarker(data);
  } else {
    createAverageMarker(data);
  }
};

export { map, createMarker, clearMarkers };
