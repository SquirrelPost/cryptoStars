import { getUserData, getContractorsData, sendDataServer } from './api.js';
import { isDataLoadingFailed, hideUserProfile, renderStatusMessage } from '../utilities/error-messages.js';
import { renderUserInfo } from '../user/render-user.js';
import { renderFilteredList } from '../contractors/render-list.js';
import { sendUserInfoToModal } from '../modal/set-modal.js';
import { resetModalFormBuy } from '../form/form-handler.js';

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const submitButton = document.querySelector('.modal__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const provideContractorsData = async () => {
  try {
    const contractors = await getContractorsData();
    renderFilteredList(contractors);
  } catch (e) {
    isDataLoadingFailed();
  }
};

const provideUserData = async () => {
  try {
    const user = await getUserData();
    renderUserInfo(user);
    sendUserInfoToModal(user);
  } catch (e) {
    hideUserProfile();
  }
};

const sendData = async (formElement) => {
  try {
    blockSubmitButton();
    await sendDataServer(new FormData(formElement));
    resetModalFormBuy();
    renderStatusMessage('success');
  } catch (e) {
    renderStatusMessage('error');
  } finally {
    unblockSubmitButton();
  }
};

export { provideContractorsData, provideUserData, sendData };
