import { getUserData, getContractorsData, /*sendDataServer*/ } from './api.js';
import { isDataLoadingFailed, hideUserProfile } from '../utilities/error-messages.js';
import { renderUserInfo } from '../user/render-user.js';
import { renderFilteredList } from '../contractors/render-list.js';
import {sendUserInfoToModal} from '../modal/set-modal.js'

const provideContractorsData = async () => {
  try {
    const contractors = await getContractorsData();
    renderFilteredList(contractors);
  } catch {
    isDataLoadingFailed();
  }
};

const provideUserData = async () => {
  try {
    const user = await getUserData();
    renderUserInfo(user);
    sendUserInfoToModal(user);
  } catch {
    hideUserProfile();
  }
};

export { provideContractorsData, provideUserData };
