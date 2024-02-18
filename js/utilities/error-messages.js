const DATA_ERROR_SHOW_TIME = 5000;

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

const renderStatusMessage = (type) => {
  const modalContainer = document.querySelector('.modal__container');
  const template = document.querySelector(`#message--${type}`);
  const status = template.content.querySelector(`.modal__validation-message--${type}`).cloneNode(true);
  setTimeout(() => {
    status.remove();
  }, DATA_ERROR_SHOW_TIME);
  modalContainer.body.append(status);
};

export { isDataLoadingFailed, hideUserProfile, isDataEmpty, renderStatusMessage };
