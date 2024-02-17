import { onExchangeButtonClick } from '../modal/set-modal.js';

const popupTemplate = document.querySelector('#map-baloon__template')
  .content.querySelector('.user-card');

let maxAmount;

const checkVerified = (popup, isVerified) => {
  if (isVerified) {
    popup.querySelector('#user-card__icon-verified').style.removeProperty('display');
  } else {
    popup.querySelector('#user-card__icon-verified').style.display = 'none';
  }
};

const calcMaxAmount = (balance, exchangeRate, status) => {
  if (status === 'buyer') {
    maxAmount = Math.round(balance.amount);
  }
  if (status === 'seller') {
    maxAmount = Math.round(balance.amount * exchangeRate);
  }
  return maxAmount;
};

const renderPayments = (popup, paymentMethods) => {
  const paymentMethodsList = popup.querySelector('.user-card__badges-list');
  paymentMethodsList.innerHTML = '';

  const rewriteMethodItem = (method) => {
    const paymentMethodsItem = document.createElement('li');
    paymentMethodsItem.classList.add('user-card__badges-item');
    paymentMethodsItem.classList.add('badge');
    paymentMethodsItem.textContent = method.provider;
    paymentMethodsList.append(paymentMethodsItem);
  };
  paymentMethods.forEach((method) => rewriteMethodItem(method));
};

const renderPopup = (data) => {
  const { balance, exchangeRate, isVerified, minAmount, paymentMethods, status, userName } = data;
  const popup = popupTemplate.cloneNode(true);
  popup.querySelector('.user-card__user-name span').textContent = userName;
  popup.querySelector('.user-card__user-name').style.minWidth = '100%';
  checkVerified(popup, isVerified);
  popup.querySelector('#users-card__currency').textContent = balance.currency;
  popup.querySelector('#users-card__exchangerate').textContent = `${exchangeRate} ₽`;
  popup.querySelector('#users-card__cashlimit').textContent =
    `${minAmount} ₽ - ${calcMaxAmount(balance, exchangeRate, status)} ₽`;

  if (paymentMethods) {
    renderPayments(popup, paymentMethods);
  } else {
    popup.querySelector('.user-card__badges-list').remove();
  }

  popup.querySelector('#exchange-button').addEventListener('click', () => {
    onExchangeButtonClick(data);
  });

  return popup;
};

export { renderPopup };
