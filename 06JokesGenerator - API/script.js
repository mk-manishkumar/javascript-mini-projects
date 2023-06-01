const jokeBtn = document.querySelector("#jokeBtn");
const jokeEl = document.querySelector("#joke");
const copyBtn = document.querySelector("#copyBtn");

const copyBtnText = copyBtn.textContent;
copyBtn.style.display = "none";

const apiUrl = `https://official-joke-api.appspot.com/random_joke`;

// function to extract joke
async function getJoke() {
  try {
    copyBtn.style.display = "block";
    copyBtn.textContent = "Copy";

    // Make a GET request to the API
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Extract the setup and punchline from the response data
    const setup = data.setup;
    const punchline = data.punchline;

    // Display the joke on your web page
    jokeEl.innerHTML = `<p><strong>${setup}</strong><br>${punchline}</p>`;
  } catch (error) {
    console.error("Error:", error);
  }
}

/*
// using promises

function getJoke() {
  copyBtn.style.display = "block";
  copyBtn.textContent = "Copy";
  // Make a GET request to the API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Extract the setup and punchline from the response data
      const setup = data.setup;
      const punchline = data.punchline;

      jokeEl.innerHTML = `<p><strong>${setup}</strong><br>${punchline}</p>`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
*/

function copyClipboard() {
  if (copyBtnText === "Copy") {
    copyBtn.textContent = "Copied";
    let jokes = jokeEl.innerText;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Use Clipboard API if available
      navigator.clipboard
        .writeText(jokes)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((error) => {
          console.error("Error copying text to clipboard:", error);
        });
    } else {
      // Fallback to execCommand for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = jokes;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      console.log("Text copied to clipboard");
    }
  }
}

jokeBtn.addEventListener("click", getJoke);

copyBtn.addEventListener("click", copyClipboard);
