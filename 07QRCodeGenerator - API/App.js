const submitBtn = document.getElementById("submit");
const input = document.getElementById("input");
const qrImg = document.getElementById("img");
const bodyEl = document.querySelector("body");

bodyEl.style.flexDirection = "column";
bodyEl.style.paddingTop = "7rem";

const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";

// encodeURIComponent()

submitBtn.addEventListener("click", qrcode);

// using promise
function qrcode() {
  bodyEl.style.flexDirection = "row";
  bodyEl.style.paddingTop = "0";

  let url = apiUrl + encodeURIComponent(input.value);
  fetch(url)
    .then((response) => response)
    .then((data) => {
      qrImg.style.display = "block";
      qrImg.src = data.url;
    });
}

/*
// using async-await
async function qrcode() {
  let url = apiUrl + encodeURIComponent(input.value);

  try {
    const response = await fetch(url);
    const data = await response.json();

    qrImg.style.display = "block";
    qrImg.src = data.url;
  } catch (error) {
    // Handle any errors that occur during the fetch or processing of the data
    console.error(error);
  }
}
*/

submitBtn.addEventListener("click", qrcode);
