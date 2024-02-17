const modalBuy = document.querySelector('.modal--buy');
const modalTemplate = modalBuy.querySelector('.modal__wrapper');

let maxAmount;
let chosenAccountNumber;

const checkVerified = (modal, isVerified) => {
  if (isVerified) {
    modal.querySelector('#transaction-info__icon-verified').style.display = 'block';
  } else {
    modal.querySelector('#transaction-info__icon-verified').style.display = 'none';
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

const renderPayments = (paymentMethodsList, paymentMethods) => {
  paymentMethodsList.innerHTML = '';
  const paymentSelectNaming = document.createElement('option');
  paymentSelectNaming.setAttribute('selected', '');
  paymentSelectNaming.setAttribute('disabled', '');
  paymentSelectNaming.textContent = 'Выберите платёжную систему';
  paymentMethodsList.append(paymentSelectNaming);

  const rewriteMethodItem = (method) => {
    const paymentMethodsItem = document.createElement('option');
    paymentMethodsItem.textContent = method.provider;
    paymentMethodsList.append(paymentMethodsItem);
  };
  paymentMethods.forEach((method) => rewriteMethodItem(method));
};

const renderModalBuy = (currentContractor, user) => {
  const { balance, exchangeRate, isVerified, minAmount, paymentMethods, status, userName, id } = currentContractor;
  const { wallet } = user;
  const modal = modalTemplate.cloneNode(true);
  modalTemplate.remove();
  modal.querySelector('[name="contractorId"]').value = id;
  modal.querySelector('[name="exchangeRate"]').value = exchangeRate;
  checkVerified(modal, isVerified);
  modal.querySelector('.transaction-info__data--name').textContent = userName;
  modal.querySelector('.transaction-info__data--exchangerate').textContent = `${exchangeRate} ₽`;
  modal.querySelector('.transaction-info__data--cashlimit').textContent =
    `${minAmount} ₽ - ${calcMaxAmount(balance, exchangeRate, status)} ₽`;

  const accountNumber = modal.querySelector('[name="accountNumber"]');
  const paymentMethodsList = modal.querySelector('[name="paymentMethod"]');
  paymentMethodsList.addEventListener('change', (evt) => {
    if (evt.target.value === 'Cash in person') {
      accountNumber.value = '';
      accountNumber.placeholder = '';
    } else {
      chosenAccountNumber = paymentMethods.find((method) => method.provider === evt.target.value).accountNumber;
      accountNumber.value = chosenAccountNumber;
    }
  });
  renderPayments(paymentMethodsList, paymentMethods);
  modal.querySelector('[name="walletAddress"]').value = wallet.address;

  modalBuy.append(modal);
};

export { renderModalBuy };


