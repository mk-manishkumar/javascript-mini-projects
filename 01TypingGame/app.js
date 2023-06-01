let textareaEl = document.querySelector("#textarea");
let buttonEl = document.querySelector("#btn");
let restartBtn = document.querySelector("#btnTwo");
let resultEl = document.querySelector("#result");

textareaEl.style.display = "none";
resultEl.style.display = "none";

// function after clicking start button
function startTyping() {
  if (buttonEl.textContent === "Start") {
    textareaEl.style.display = "block";
    buttonEl.style.display = "none";
    restartBtn.style.display = "none";
    textareaEl.value = "";
  } else {
    displayResult();
  }
}

// once user starts typing
function inputText() {
  buttonEl.style.display = "block";
  buttonEl.textContent = "Done";
}

// to start time counter
let startTime;
textareaEl.addEventListener("keydown", () => {
  if (!startTime) {
    startTime = new Date();
  }
});

// function for all major calculations
function startCounting() {
  let value = textareaEl.value;

  const words = value.split(" ");
  const wordCount = words.length;

  const endTime = new Date();
  const timeTaken = (endTime - startTime) / 1000;

  const wpm = Math.round((wordCount / timeTaken) * 60);

  resultEl.innerHTML = `You have typed ${wordCount} words in ${timeTaken} seconds. You have a typing speed of ${wpm} wpm. `;
}

// once user clicks on Done btn after typigng
function displayResult() {
  textareaEl.style.display = "none";
  buttonEl.style.display = "none";
  restartBtn.style.display = "block";
  resultEl.style.display = "block";
  resultEl.style.color = "#ffffff";
  startCounting();
}

// once user click start button
buttonEl.addEventListener("click", startTyping);

// once user clicks on Start Again Button
restartBtn.addEventListener("click", () => {
  resultEl.style.display = "none";
  buttonEl.textContent = "Start";
  startTime = 0;
  startTyping();
});
