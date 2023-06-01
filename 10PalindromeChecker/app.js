const inputEl = document.querySelector("#text");
const outputEl = document.querySelector("#input");
const reverseEl = document.querySelector("#reverse");
const resultEl = document.querySelector("#result");

inputEl.addEventListener("input", () => {
  let input = inputEl.value.toLowerCase();
  if (input !== "") {
    outputEl.innerHTML = `Word: <span class="value">${input}</span>`;
    let output = reverseText(input);
    reverseEl.innerHTML = `Reverse: <span class="value">${output}</span>`;
    let result = checkPalindrome(input, output);
    resultEl.innerHTML = `Result: <span class="value">${result}</span>`;
  } else {
    outputEl.innerHTML = "";
    reverseEl.innerHTML = "";
    resultEl.innerHTML = "";
  }
});

// function for reversing the text
function reverseText(input) {
  let word = input;
  let rev = "";

  for (let i = word.length - 1; i >= 0; i--) {
    rev += word[i];
  }
  return rev;
}

// function to check palindrome
function checkPalindrome(input, output) {
  if (input === output) {
    return "Palindrome";
  } else {
    return "Not Palindrome";
  }
}
