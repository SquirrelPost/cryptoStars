// переключение табов
const tabTypeButtons = document.querySelectorAll('.tabs__control--type');
const tabViewButtons = document.querySelectorAll('.tabs__control--view');
const activateTypeButton = (evt) => {
  const buttonActive = document.querySelector('.tabs__control--type.is-active');
  buttonActive.classList.remove('is-active');
  evt.target.classList.add('is-active');
};
const activateViewButton = (evt) => {
  const buttonActive = document.querySelector('.tabs__control--view.is-active');
  buttonActive.classList.remove('is-active');
  evt.target.classList.add('is-active');
};
const onTypeButtonClick = () => {
  tabTypeButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      activateTypeButton(evt);
    });
  });
};
onTypeButtonClick();

//При переключении на карту блок .users-list нужно скрыть
const usersList = document.querySelector('.users-list');
const mapContainer = document.querySelector('#map-container');

const toggleListMap = () => {
  if (usersList.style.display === 'none') {
    usersList.style.display = 'block';
  } else {
    usersList.style.display = 'none';
  }
  if (mapContainer.style.display === 'none') {
    mapContainer.style.display = 'block';
  } else {
    mapContainer.style.display = 'none';
  }
};

const onViewButtonClick = () => {
  tabViewButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      activateViewButton(evt);
      toggleListMap();
    });
  });
};
onViewButtonClick();

//при открытии попапа также нужно убрать скролл с body
const modalContainer = document.querySelector('.modal');
const userListButton = document.querySelector('#users-list__button');
const openModal = () => {
  modalContainer.style.removeProperty('display');
  document.body.classList.add('scroll-lock');
};
const onExchangeButtonClick = () => {
  openModal();
  userListButton.removeEventListener('click', onExchangeButtonClick);
};

const loadUserList = () => {
  userListButton.addEventListener('click', onExchangeButtonClick);
};

