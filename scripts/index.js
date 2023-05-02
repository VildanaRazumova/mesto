// Открыть попап через иконку с карандашом, закрыть попап через крестик

const popupButtonOpen = document.querySelector('.profile__button_edit');
const popup = document.querySelector('.popup');
const poopupButtonClosed = document.querySelector('.popup__close-image');
const poopupButtonSave = document.querySelector('.popup__button_save');

const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup__popup_opened')

popupButtonOpen.addEventListener('click', () => togglePopupState(popup));
poopupButtonClosed.addEventListener('click', () => togglePopupState(popup));
poopupButtonSave.addEventListener('click', () => togglePopupState(popup));

const profileName = document.querySelector('.section-title');
const profileAbout = document.querySelector('.section-subtitle');


// Находим форму в DOM
let formElement = document.querySelector('.popup');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__item_name');
let jobInput = document.querySelector('.popup__item_about');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameInput = document.querySelector('.popup__item_name').value;
    let aboutInput = document.querySelector('.popup__item_about').value;

    // Выберите элементы, куда должны быть вставлены значения полей
    document.querySelector('.section-title').innerHTML = nameInput;
    document.querySelector('.section-subtitle').innerHTML = aboutInput;

    // Вставьте новые значения с помощью textContent
    nameInput = profileName.textContent;
    aboutInput = profileAbout.textContent;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
