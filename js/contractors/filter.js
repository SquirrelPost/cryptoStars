const checkboxVerified = document.querySelector('#checked-users');

const checkVerified = (isVerified) => {
  if (checkboxVerified.checked) {
    return isVerified === true;
  } else {
    return true;
  }
};

const filterContractors = (contractors) => contractors
  .filter(({ isVerified }) => (checkVerified(isVerified))
  // &&
);

export { filterContractors };
