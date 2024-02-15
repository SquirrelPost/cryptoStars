import { getUserData, getContractorsData, /*sendDataServer*/ } from './api.js';
// import { createMarkers } from '../map/filter.js';
import { isDataLoadingFailed, hideUserProfile } from '../utilities/error-messages.js';
import { renderUserInfo } from '../user/render-user.js';
import { createList } from '../contractors/render-data.js';

const provideContractorsData = async () => {
  try {
    const contractors = await getContractorsData();
    // createMarkers(contractors);
    // console.log(contractors)
    createList(contractors);
    // console.log(contractors);
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
