//при ошибке загрузки данных блок .user-profile нужно скрыть
const userProfileBlock = document.querySelector('.user-profile');
const hideUserProfile = () => {
  userProfileBlock.remove();
};

//В случае ошибки загрузки нужно показать .container с сообщением об ошибке и остальные скрыть
const dataErrorBlock = document.querySelector('#data-error-block');
const dataResultBlock = document.querySelector('#data-result-block');
const showDataErrorBlock = () => {
  dataErrorBlock.style.display = 'initial';
  dataResultBlock.style.display = 'none';
};

//В случае ошибки загрузки
const isDataLoadingFailed = () => {
  showDataErrorBlock();
};

// При отсутствии данных (если пользователь применил жёсткие фильтры или сервер вернул пустой массив данных)
const emptyDataBlock = document.querySelector('#empty-data-block');
const showEmptyDataBlock = () => {
  emptyDataBlock.style.display = 'block';
};
const isDataEmpty = () => {
  showEmptyDataBlock();
};

export { isDataLoadingFailed, hideUserProfile, isDataEmpty };
