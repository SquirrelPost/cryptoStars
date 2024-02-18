import { validateForm, resetPristine, modalFormChange, checkErrors } from './validate-form.js';
import { sendData } from '../data/server-data.js';

const modalForm = document.querySelector('.modal__form');

const resetModalFormBuy = () => {
  modalForm.reset();
  resetPristine();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    sendData(evt.target);
  }
};

const initForm = () => {
  modalFormChange();
  checkErrors();
  resetModalFormBuy();
  modalForm.addEventListener('submit', onFormSubmit);
};

export {initForm, resetModalFormBuy};
