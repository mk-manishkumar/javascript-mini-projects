const textareaEl = document.querySelector("#text");
const charCount = document.querySelector("#char");
const wordCount = document.querySelector("#words");

textareaEl.addEventListener("input", () => {
  const input = textareaEl.value;
  if (input !== "") {
    let totalNumberOfWords = wordCounter(input);
    let totalNumberOfCharacters = charCounter(input);
    charCount.innerHTML = `Number of Words : ${totalNumberOfWords}`;
    wordCount.innerHTML = `Number of Chars : ${totalNumberOfCharacters}`;
  } else {
    charCount.innerHTML = "";
    wordCount.innerHTML = "";
  }
});

function wordCounter(input) {
  let countWord = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === " " || i === input.length - 1) {
      countWord++;
    }
  }

  let totalWords = countWord;

  return totalWords;
}

function charCounter(input) {
  let countChar = 0;
  for (let i = 0; i < input.length; i++) {
    countChar++;
  }

  let totalChar = countChar;

  return totalChar;
}
