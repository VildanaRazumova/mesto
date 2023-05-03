// Открыть попап через иконку с карандашом, закрыть попап через крестик

const popupButtonOpen = document.querySelector('.profile__button_type_edit');
const popup = document.querySelector('.popup');
const poopupButtonClosed = document.querySelector('.popup__close-image');
const poopupButtonSave = document.querySelector('.popup__button_type_save');
const profileName = document.querySelector('.profile__section-title');
const profileAbout = document.querySelector('.profile__section-subtitle');
const popupForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__item_type_name');
const jobInput = document.querySelector('.popup__item_type_about');

// Открытие по клику на кнопку
popupButtonOpen.addEventListener('click', () =>
popup.classList.add('popup_opened'),
nameInput.value = profileName.textContent,
jobInput.value = profileAbout.textContent);

// Закрытие по клику на крестик\сохранить
poopupButtonClosed.addEventListener('click', () =>
popup.classList.remove('popup_opened'));

poopupButtonSave.addEventListener('click', () =>
popup.classList.remove('popup_opened'));


// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault();
//    // Получите значение полей jobInput и nameInput из свойства value
   profileName.textContent = nameInput.value;
   profileAbout.textContent = jobInput.value;

}

popupForm.addEventListener('submit', handleFormSubmit);
