let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

let timerRef = document.querySelector(".timer-display");

let interval = null;

document.getElementById("start-timer").addEventListener("click", () => {
  if (interval !== null) {
    clearInterval(interval);
  }
  interval = setInterval(displayTimer, 10);
});

function displayTimer() {
  milliseconds += 10;
  seconds = milliseconds == 1000 ? (seconds + 1) % 60 : seconds;
  minutes = seconds == 0 && milliseconds == 0 ? (minutes + 1) % 60 : minutes;
  hours = minutes == 0 && seconds == 0 && milliseconds == 0 ? hours + 1 : hours;
  milliseconds = milliseconds == 1000 ? 0 : milliseconds;

  let hr = String(hours).padStart(2, "0");
  let min = String(minutes).padStart(2, "0");
  let sec = String(seconds).padStart(2, "0");
  let ms = String(milliseconds).padStart(3, "0");

  timerRef.innerHTML = `${hr} : ${min} : ${sec} : ${ms}`;
}

document.getElementById("pause-timer").addEventListener("click", () => {
  clearInterval(interval);
});

document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(interval);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00 : 000";
});
