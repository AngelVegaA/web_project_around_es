const initialCards = [
    {name: "Valle de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"},
    {name: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"},
    {name: "Montañas Calvas", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"},
    {name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"},
    {name: "Parque Nacional de la Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"},
    {name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"}
];

const editProfileButton = document.querySelector('.profile__edit-button');
const profileModal = document.querySelector('#edit-popup');
const closeProfileButton = profileModal.querySelector(".popup__close");

const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const inputName = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');

const cardTemplate = document.getElementById('card-template');

function getCardElement(name = "Sin título", link = "./images/placeholder.jpg") {
    const cardElement = cardTemplate.content.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = name;
    cardImage.src = link;
    cardImage.alt = name;
    return cardElement;
}

function renderCard(name, link) {
    const cardElement = getCardElement(name, link);
    const cardsContainer = document.querySelector('.cards__list');
    cardsContainer.append(cardElement);
}

initialCards.forEach((card) => {
    renderCard(card.name, card.link);
});

function openModal(modal) {
    modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
    modal.classList.remove("popup_is-opened");
}

function fillProfileForm() {
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
}

function handleOpenEditModal() {
    fillProfileForm();         
    openModal(profileModal);
} // <--- ¡Esta es la llave que faltaba!

editProfileButton.addEventListener('click', handleOpenEditModal);

closeProfileButton.addEventListener('click', function () {
    closeModal(profileModal);
});

// Vamos a buscar el formulario en el DOM
const formElement = profileModal.querySelector('.popup__form'); // Utiliza el método querySelector()

// Lo siguiente es el controlador (handler) para el envío de formularios, aunque
// no se enviará a ningún sitio todavía

// Observa que el nombre de la función comienza con un verbo
// y describe exactamente lo que hace la función
function handleProfileFormSubmit(evt) {
  // Esta línea impide que el navegador
  // envíe el formulario en su forma predeterminada.
  evt.preventDefault();
  // Una vez hecho esto, podemos definir nuestra propia forma de enviar el formulario.
  // Lo explicaremos todo con más detalle después.

 // Vamos a buscar los campos del formulario en el DOM
    const nameInput =  formElement.querySelector('.popup__input_type_name');
    const jobInput =  formElement.querySelector('.popup__input_type_description');

  // Obtén los valores de cada campo desde la correspondiente propiedad value
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
  // Selecciona los elementos donde se introducirán los valores de los campos

  // Inserta nuevos valores utilizando la propiedad textContent
  // de los elementos seleccionados
  closeModal(profileModal);
}

// Conecta el controlador (handler) al formulario:
// se observará el evento submit
formElement.addEventListener('submit', handleProfileFormSubmit);
