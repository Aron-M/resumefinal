const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});


const modal2 = document.querySelector(".building-block-expand");
const openModal2 = document.querySelector("#bb1");
const closeModal2 = document.querySelector("#close-modal-2");

openModal2.addEventListener("click", () => {
  modal2.showModal();
});

closeModal2.addEventListener("click", () => {
  modal2.close();
});


const modal3 = document.querySelector(".building-block-expand2");
const openModal3 = document.querySelector("#bb2");
const closeModal3 = document.querySelector("#close-modal-3");

openModal3.addEventListener("click", () => {
  modal3.showModal();
});

closeModal3.addEventListener("click", () => {
  modal3.close();
});



