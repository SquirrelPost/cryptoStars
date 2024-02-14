const userProfileBlock = document.querySelector('.user-profile');
const userCryptoBalance = userProfileBlock.querySelector('#user-crypto-balance');
const userFiatBalance = userProfileBlock.querySelector('#user-fiat-balance');
const userProfileName = userProfileBlock.querySelector('.user-profile__name span');

const findAmountCrypto = ([, objCrypto]) => {
  const amountCrypto = objCrypto.amount;
  return amountCrypto;
};

const findAmountFiat = ([objFiat, ]) => {
  const amountFiat = objFiat.amount;
  return amountFiat;
};

const renderUserInfo = (data) => {
  const { userName, balances } = data;
  userCryptoBalance.textContent = findAmountCrypto(balances);
  userFiatBalance.textContent = findAmountFiat(balances);
  userProfileName.textContent = userName;
};

export { renderUserInfo };
