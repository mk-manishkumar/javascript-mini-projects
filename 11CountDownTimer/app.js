const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const startBtn = document.getElementById("start");
const resetbtn = document.getElementById("reset");

const display = document.getElementById("display");

let interval = null;
let total = 0;

Timer = () => {
  totalValue();
  total--;

  if (total >= 0) {
    let hr = Math.floor(total / 3600);
    let min = Math.floor(total / 60 - hr * 60);
    let sec = total - (hr * 3600 + min * 60);

    hour.value = hr;
    minute.value = min;
    second.value = sec;
  } else {
    display.innerText = "Time is Over!";
  }
};

totalValue = () => {
  total =
    Number(hour.value) * 3600 +
    Number(minute.value) * 60 +
    Number(second.value);
};

startBtn.addEventListener("click", () => {
  clearInterval(interval);
  second.disabled = true;
  minute.disabled = true;
  hour.disabled = true;
  startBtn.style.display = "none";

  interval = setInterval(Timer, 1000);

  display.innerText = "Timer Started";
});

resetbtn.addEventListener("click", () => {
  clearInterval(interval);

  hour.value = "";
  minute.value = "";
  second.value = "";

  second.disabled = false;
  minute.disabled = false;
  hour.disabled = false;
  startBtn.style.display = "inline";

  display.innerText = "Timer";
});
