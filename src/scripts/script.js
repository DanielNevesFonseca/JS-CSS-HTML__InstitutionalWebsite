function handleModalNextClass() {
  let listNextClassButton = document.querySelectorAll(".header__btn-register-next-class");
  let registerClassModal = document.querySelector(".header__next-class-modal-controller");

  for (let i = 0; i < listNextClassButton.length; i++){
    let button = listNextClassButton[i];
    button.addEventListener("click", () => {
      registerClassModal.showModal();
      closeModal();
    })
  }
}
handleModalNextClass();

function closeModal(){
  let closeTabButton = document.querySelector(".header__btn-close-tab");
  let registerButton = document.querySelector(".header__btn-register");
  let registerClassModal = document.querySelector(".header__next-class-modal-controller");

  closeTabButton.addEventListener('click', () => {
    registerClassModal.close();
  })
  registerButton.addEventListener('click', () => {
    registerClassModal.close();
  })
}