// get modal element
let modal = document.getElementById("simpleModal");

// get open modal button
let modalBtn = document.getElementById("modalBtn");

// close button
let closeBtn = document.getElementsByClassName("closeBtn")[0];

// listen for click on button
modalBtn.addEventListener("click", openModal);

// listen for close button
closeBtn.addEventListener("click", closeModal);

// lsten for outside click
window.addEventListener("click", clickOutside);

// function to open modal
function openModal() {
  modal.style.display = "block";
}

// function to close modal
function closeModal() {
  modal.style.display = "none";
}

// function to close modal if clicked outside of modal
function clickOutside(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
