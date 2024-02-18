const CORRECT_PASSWORD = 180712;

const modalForm = document.querySelector('.modal__form');
const sendingAmountField = modalForm.querySelector('.sendingAmount');
const receivingAmountField = modalForm.querySelector('.receivingAmount');
const paymentPasswordField = modalForm.querySelector('[name="paymentPassword"]');
const exchangeRateField = modalForm.querySelector('[name="exchangeRate"]');

const SENDING = {
  MAX: sendingAmountField.getAttribute('max'),
  MIN: sendingAmountField.getAttribute('min'),
};

const RECEIVING = {
  MAX: receivingAmountField.getAttribute('max'),
  MIN: receivingAmountField.getAttribute('min'),
};
const ERROR_MESSAGES = {
  sendingMax: `Максимальная сумма — ${SENDING.MAX} ₽`,
  sendingMin: `Минимальная сумма — ${SENDING.MIN} ₽`,
  receivingMax: `Максимальная сумма — ${RECEIVING.MAX} ₽`,
  receivingMin: `Минимальная сумма — ${RECEIVING.MIN} ₽`,
  password: 'Неверный пароль',
};

const pristine = new Pristine(modalForm, {
  classTo: 'custom-input',
  errorClass: 'custom-input__error',
  errorTextParent: 'custom-input',
  errorTextTag: 'div',
  errorTextClass: 'custom-input__error',
});

const checkSendingAmountMax = (value) => Number(value) <= SENDING.MAX;
const checkSendingAmountMin = (value) => Number(value) >= SENDING.MIN;
const checkReceivingAmountMax = (value) => Number(value) <= RECEIVING.MAX;
const checkReceivingAmountMin = (value) => Number(value) >= RECEIVING.MIN;
const checkPaymentPassword = (value) => value === CORRECT_PASSWORD;

const checkErrors = () => {
  pristine.addValidator(
    sendingAmountField,
    checkSendingAmountMax,
    ERROR_MESSAGES.sendingMax,
    1,
    true
  );
  pristine.addValidator(
    sendingAmountField,
    checkSendingAmountMin,
    ERROR_MESSAGES.sendingMin,
    1,
    true
  );
  pristine.addValidator(
    receivingAmountField,
    checkReceivingAmountMax,
    ERROR_MESSAGES.receivingMax,
    1,
    true
  );
  pristine.addValidator(
    receivingAmountField,
    checkReceivingAmountMin,
    ERROR_MESSAGES.receivingMin,
    1,
    true
  );
  pristine.addValidator(
    paymentPasswordField,
    checkPaymentPassword,
    ERROR_MESSAGES.password,
    1,
    true
  );
};

const validateForm = () => pristine.validate();
const resetPristine = () => pristine.reset();

const onSendingChange = () => {
  receivingAmountField.value = sendingAmountField / exchangeRateField.value;
};

const onReceivingChange = () => {
  sendingAmountField.value = receivingAmountField * exchangeRateField.value;
};

const modalFormChange = () => modalForm.addEventListener('change', (event) => {
  switch (event.target.name) {
    case 'sendingAmount':
      pristine.validate(sendingAmountField);
      onSendingChange();
      break;
    case 'receivingAmount':
      pristine.validate(receivingAmountField);
      onReceivingChange();
      break;
    case 'paymentPassword':
      pristine.validate(paymentPasswordField);
      break;
  }
});

export { validateForm, resetPristine, modalFormChange, checkErrors };
