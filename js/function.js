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

