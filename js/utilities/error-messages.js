const userProfileBlock = document.querySelector('.user-profile');
const hideUserProfile = () => {
  userProfileBlock.remove();
};

const dataErrorBlock = document.querySelector('#data-error-block');
const dataResultBlock = document.querySelector('#data-result-block');
const showDataErrorBlock = () => {
  dataErrorBlock.style.display = 'initial';
  dataResultBlock.style.display = 'none';
};

const isDataLoadingFailed = () => {
  showDataErrorBlock();
};

const emptyDataBlock = document.querySelector('#empty-data-block');
const showEmptyDataBlock = () => {
  emptyDataBlock.style.display = 'block';
};
const isDataEmpty = () => {
  showEmptyDataBlock();
};

export { isDataLoadingFailed, hideUserProfile, isDataEmpty };
