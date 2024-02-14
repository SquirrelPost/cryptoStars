import { getUserData, getContractorsData, /*sendDataServer*/ } from './api.js';
// import { createMarkers } from '../map/filter.js';
import { isDataLoadingFailed, hideUserProfile } from '../utilities/error-messages.js';
import { renderUserInfo } from './render-user.js';
import { renderContractor } from './render-data.js';

const provideContractorsData = async () => {
  try {
    const contractors = await getContractorsData();
    // createMarkers(contractors);
    contractors.forEach(contractor => {
      renderContractor(contractor);
    });
  } catch {
    isDataLoadingFailed();
  }
};

const provideUserData = async () => {
  try {
    const user = await getUserData();
    renderUserInfo(user);
  } catch {
    hideUserProfile();
  }
};

export { provideContractorsData, provideUserData };
