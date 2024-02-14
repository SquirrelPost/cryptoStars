const userListContainer = document.querySelector('.users-list__table-body');
const userListTemplate = document.querySelector('#user-table-row__template')
  .content.querySelector('.users-list__table-row');

const checkVerified = (userTableRow, isVerified) => {
  if (isVerified) {
    userTableRow.querySelector('#user-list__icon-verified').style.removeProperty('display');
  } else {
    userTableRow.querySelector('#user-list__icon-verified').style.display = 'none';
  }
};

let maxAmount;

const calcMaxAmount = (balance, exchangeRate, status) => {
  if (status === 'buyer') {
    maxAmount = balance.amount;
  }
  if (status === 'seller') {
    maxAmount = balance.amount * exchangeRate;
  }
  return maxAmount;
};

const renderPayments = (userTableRow, paymentMethods) => {
  const paymentMethodsList = userTableRow.querySelector('.users-list__badges-list');
  paymentMethodsList.innerHTML = '';

  const rewriteMethodItem = (method) => {
    const paymentMethodsItem = document.createElement('li');
    paymentMethodsItem.classList.add('users-list__badges-item');
    paymentMethodsItem.classList.add('badge');
    paymentMethodsItem.textContent = method.provider;
    paymentMethodsList.append(paymentMethodsItem);
  };
  paymentMethods.forEach((method) => rewriteMethodItem(method));
};

const renderContractor = (data) => {
  const { balance, exchangeRate, isVerified, minAmount, paymentMethods, status, userName } = data;
  const userTableRow = userListTemplate.cloneNode(true);
  userTableRow.querySelector('.users-list__table-name span').textContent = userName;
  checkVerified(userTableRow, isVerified);
  userTableRow.querySelector('.users-list__table-currency').textContent = balance.currency;
  userTableRow.querySelector('.users-list__table-exchangerate').textContent = `${exchangeRate} ₽`;
  userTableRow.querySelector('.users-list__table-cashlimit').textContent =
    `${minAmount} ₽ - ${calcMaxAmount(balance, exchangeRate, status)} ₽`;

  if (paymentMethods) {
    renderPayments(userTableRow, paymentMethods);
  } else {
    userTableRow.querySelector('.users-list__badges-list').remove();
    userTableRow.querySelector('.users-list__table-payments').textContent = 'Отсутствуют';
  }

  const userListFragment = document.createDocumentFragment();
  userListFragment.append(userTableRow);
  userListContainer.append(userListFragment);
};

export { renderContractor };
