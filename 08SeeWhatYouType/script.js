let inputEl = document.querySelector("#input");
let outputEl = document.querySelector("#output");

function update() {
  let startTyping = inputEl.value;

  if (startTyping === "") {
    outputEl.innerHTML = "Input Box Is Empty... Start Typing";
  } else {
    outputEl.innerHTML = startTyping;
  }
}
