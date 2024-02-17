import { onBuySellClick } from '../contractors/render-list.js';
import { map } from '../map/create-markers.js';

const tabTypeButtons = document.querySelectorAll('.tabs__control--type');
const tabViewButtons = document.querySelectorAll('.tabs__control--view');
const usersList = document.querySelector('.users-list');
const mapContainer = document.querySelector('#map-container');
const toggleBuySellContainer = document.querySelector('.tabs--toggle-buy-sell');
const toggleListMapContainer = document.querySelector('.tabs--toggle-list-map');
const emptyDataBlock = document.querySelector('#empty-data-block');

const activateTypeButton = (evt) => {
  const buttonActive = toggleBuySellContainer.querySelector('.is-active');
  buttonActive.classList.remove('is-active');
  evt.target.classList.add('is-active');
};

const onTypeButtonClick = () => {
  tabTypeButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      activateTypeButton(evt);
      onBuySellClick();
    });
  });
};

const activateViewButton = (evt) => {
  const buttonActive = toggleListMapContainer.querySelector('.is-active');
  buttonActive.classList.remove('is-active');
  evt.target.classList.add('is-active');
};

const toggleListMap = () => {
  const buttonActive = toggleListMapContainer.querySelector('.is-active');
  if (buttonActive.getAttribute('data-tabs') === 'list') {
    usersList.style.display = 'block';
    mapContainer.style.display = 'none';
  }
  if (buttonActive.getAttribute('data-tabs') === 'map') {
    mapContainer.style.display = 'block';
    mapContainer.style.position = 'relative';
    mapContainer.style.zIndex = '1';
    usersList.style.display = 'none';
    map.invalidateSize(false);
    if (emptyDataBlock.style.display === 'block') {
      emptyDataBlock.style.display = 'none';
    }
  }
};

const onViewButtonClick = () => {
  toggleListMap();
  tabViewButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      activateViewButton(evt);
      toggleListMap();
    });
  });
};

export { onTypeButtonClick, onViewButtonClick };

