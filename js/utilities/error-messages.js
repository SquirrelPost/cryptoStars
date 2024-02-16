const userProfileBlock = document.querySelector('.user-profile');
const dataErrorBlock = document.querySelector('#data-error-block');
const dataResultBlock = document.querySelector('#data-result-block');
const emptyDataBlock = document.querySelector('#empty-data-block');
const mapContainer = document.querySelector('#map-container');

const hideUserProfile = () => {
  userProfileBlock.remove();
};

const showDataErrorBlock = () => {
  dataErrorBlock.style.display = 'initial';
  dataResultBlock.style.display = 'none';
  mapContainer.style.display = 'none';
};

const isDataLoadingFailed = () => {
  showDataErrorBlock();
};

const showEmptyDataBlock = () => {
  emptyDataBlock.style.display = 'block';
};

const isDataEmpty = () => {
  showEmptyDataBlock();
};

export { isDataLoadingFailed, hideUserProfile, isDataEmpty };
