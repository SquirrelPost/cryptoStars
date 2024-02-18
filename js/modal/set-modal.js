import { isEscapeKey } from '../utilities/util.js';
import { renderModalBuy } from './modal-buy.js';
import { renderModalSell } from './modal-sell.js';
import { resetPristine } from '../form/validate-form.js';
import { initForm } from '../form/form-handler.js';

let modalContainer;
let modalOverlay;
let modalForm;
let modalCloseButton;
let userInfo;

const sendUserInfoToModal = (user) => {
  userInfo = user;
};

const checkStatus = (status) => {
  if (status === 'seller') {
    modalContainer = document.querySelector('.modal--buy');
  } else {
    modalContainer = document.querySelector('.modal--sell');
  }
  return modalContainer;
};

const showModal = () => {
  modalContainer.style.removeProperty('display');
  document.body.classList.add('scroll-lock');
  modalOverlay = modalContainer.querySelector('.modal__overlay');
  modalOverlay.addEventListener('click', onModalOverlayClick);
  document.addEventListener('keydown', onModalEscKeydown);
  modalCloseButton = modalContainer.querySelector('.modal__close-btn');
  modalCloseButton.addEventListener('click', onCloseButtonClick);
  initForm();
};

const renderModal = (currentContractor) => {
  if (currentContractor.status === 'seller') {
    renderModalBuy(currentContractor, userInfo);
  } else {
    renderModalSell(currentContractor, userInfo);
  }
};

const onExchangeButtonClick = (currentContractor) => {
  checkStatus(currentContractor.status);
  modalContainer.innerHTML = '';
  renderModal(currentContractor);
  showModal();
};

const hideModal = () => {
  modalForm = modalContainer.querySelector('.modal__form');
  modalForm.reset();
  resetPristine();
  modalContainer.style.display = 'none';
  document.body.classList.remove('scroll-lock');
  modalOverlay.removeEventListener('click', onModalOverlayClick);
  document.removeEventListener('keydown', onModalEscKeydown);
  modalCloseButton.removeEventListener('click', onCloseButtonClick);
};

function onModalEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideModal();
  }
}

function onModalOverlayClick() {
  hideModal();
}

function onCloseButtonClick() {
  hideModal();
}

export { onExchangeButtonClick, sendUserInfoToModal };
