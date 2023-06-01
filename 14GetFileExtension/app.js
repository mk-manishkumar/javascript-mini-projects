let file = document.getElementById("my-file");
let message = document.getElementById("message");

file.addEventListener("input", () => {
  if (file.files.length) {
    // if user selects a file
    let fileExtension = file.files[0].name.split(".").pop();
    message.innerHTML = fileExtension;
  } else {
    // if user clicks on cancel
    message.innerHTML = "Please select a file";
  }
});
