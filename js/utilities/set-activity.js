const tabTypeButtons = document.querySelectorAll('.tabs__control--type');

const activateTypeButton = (evt) => {
  const buttonActive = document.querySelector('.tabs__control--type.is-active');
  buttonActive.classList.remove('is-active');
  evt.target.classList.add('is-active');
};

const onTypeButtonClick = () => {
  tabTypeButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      activateTypeButton(evt);
    });
  });
};

export { onTypeButtonClick };

