let text = document.getElementById("text");

let submitBtn = document.getElementById("submit");
let resumeBtn = document.getElementById("resume");
let pauseBtn = document.getElementById("pause");

let audioSpeech;

submitBtn.addEventListener("click", () => {
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";

  // set the text
  audioSpeech.text = text.value;
  // speak the text
  window.speechSynthesis.speak(audioSpeech);
});

resumeBtn.addEventListener("click", () => {
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";

  if (speechSynthesis.pause) {
    speechSynthesis.resume();
  }
});

pauseBtn.addEventListener("click", () => {
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "block";

  speechSynthesis.speaking ? speechSynthesis.pause() : "";
});

window.onload = () => {
  resumeBtn.style.display = "none";
  pauseBtn.style.display = "none";

  if ("speechSynthesis" in window) {
    audioSpeech = new SpeechSynthesisUtterance();
  } else {
    alert("Not Supported :(");
  }
};

// text.addEventListener("input", () => {
//   resumeBtn.style.display = "none";
//   pauseBtn.style.display = "none";
// });
