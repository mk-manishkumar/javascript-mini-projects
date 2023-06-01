const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

// for copying the password
clipboardEl.addEventListener("click", () => {
  const password = resultEl.innerText;
  copyToClipboard(password);
});

// for printing password in that box
generateEl.addEventListener("click", () => {
  resultEl.innerHTML = generatePassword();
});

// function to generate password
function generatePassword() {
  let output = "";
  let selectedOptions = 0;

  if (uppercaseEl.checked) {
    output += getRandomUpper();
    selectedOptions++;
  }
  if (lowercaseEl.checked) {
    output += getRandomLower();
    selectedOptions++;
  }
  if (numbersEl.checked) {
    output += getRandomNumber();
    selectedOptions++;
  }
  if (symbolsEl.checked) {
    output += getRandomSymbol();
    selectedOptions++;
  }

  if (selectedOptions === 0) {
    alert("You have to select at least one box");
    resultEl.style.display = "none";
  }

  let shuffledOutput = shuffleString(output);
  let finalPwd = "";

  console.log(shuffledOutput);
  if (lengthEl.value > 3 && lengthEl.value < 21) {
    for (let i = 0; i < lengthEl.value; i++) {
      finalPwd += shuffledOutput[i % shuffledOutput.length];
    }
    console.log(finalPwd);
    return finalPwd;
  } else {
    alert("No. of characters should be 4-20 characters");
    resultEl.style.display = "none";
  }
}

// function for lowercase
function getRandomLower() {
  let charset = "abcdefghijklmnopqrstuvwxyz";
  return randomCharset(charset);
}

// function for uppercase
function getRandomUpper() {
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return randomCharset(charset);
}

// function for numbers
function getRandomNumber() {
  let charset = "0123456789";
  return randomCharset(charset);
}

// function for symbols
function getRandomSymbol() {
  let charset = "!@#$%^&*()_+~`|}{[]:;?><,./-='";
  return randomCharset(charset);
}

// function for extracting random characters
function randomCharset(charset) {
  let randomPwd = "";
  for (let i = 0; i < charset.length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    randomPwd += charset[randomIndex];
  }
  return randomPwd;
}

// function for shuffling the password using Fisher-Yates shuffle algorithm
function shuffleString(str) {
  let array = str.split("");
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
}

// function to copy text to clipboard
function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    // Use Clipboard API if available
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Password copied to clipboard: " + text);
      })
      .catch((error) => {
        console.error(
          "Failed to copy password to clipboard using Clipboard API:",
          error
        );
        fallbackCopyToClipboard(text);
      });
  } else {
    // Fallback to execCommand method
    fallbackCopyToClipboard(text);
  }
}

// function for fallback copy to clipboard using execCommand
function fallbackCopyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    alert("Password copied to clipboard: " + text);
  } catch (error) {
    console.error(
      "Failed to copy password to clipboard using execCommand:",
      error
    );
    alert("Copying to clipboard is not supported in this browser.");
  }
  document.body.removeChild(textarea);
}
