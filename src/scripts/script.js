function handleModalNextClass() {
  let listNextClassButton = document.querySelectorAll(".register-next-class");
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
  let headerRegisterButton = document.querySelector(".header__btn-register");
  let mainRegisterButton = document.querySelector(".main__btn-register-next-class")
  let registerClassModal = document.querySelector(".header__next-class-modal-controller");

  closeTabButton.addEventListener('click', () => {
    registerClassModal.close();
  })
  headerRegisterButton.addEventListener('click', () => {
    registerClassModal.close();
  })

  mainRegisterButton.addEventListener("click", () => {
    registerClassModal.close();
  })
}