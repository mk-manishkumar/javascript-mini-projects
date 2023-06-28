const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// Fill listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// loop through empties and call drag events
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// Retrieve saved data from local storage
const savedIndex = localStorage.getItem("draggedImageIndex");
if (savedIndex !== null) {
  const targetEmpty = empties[parseInt(savedIndex)];
  targetEmpty.appendChild(fill);
}

// drag functions
function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "fill";
  // Save the index of the target empty box to local storage
  const targetEmpty = this.parentElement;
  const index = Array.from(empties).indexOf(targetEmpty);
  localStorage.setItem("draggedImageIndex", index.toString());
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  this.appendChild(fill);
}
