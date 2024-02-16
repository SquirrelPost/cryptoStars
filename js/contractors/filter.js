const checkboxVerified = document.querySelector('#checked-users');
const toggleBuySellContainer = document.querySelector('.tabs--toggle-buy-sell');

const checkVerified = (isVerified) => {
  if (checkboxVerified.checked) {
    return isVerified === true;
  } else {
    return true;
  }
};

const checkActiveButton = (status) => {
  const activeButton = toggleBuySellContainer.querySelector('.is-active');
  if (activeButton.getAttribute('data-tabs') === 'buy') {
    return status === 'seller';
  } else {
    return status === 'buyer';
  }
};

// const checkName = (userName) => {
//   return userName === 'Рита';
// };

const filterContractors = (contractors) => contractors.filter(({ isVerified, status/*, userName*/ }) =>
  checkVerified(isVerified)
  && checkActiveButton(status)
  // && checkName(userName)
);

export { filterContractors };
