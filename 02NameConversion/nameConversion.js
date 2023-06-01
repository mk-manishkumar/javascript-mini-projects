const inputText = document.querySelector("#text");
const convertBtn = document.querySelector("#convert-btn");

convertBtn.addEventListener("click", () => {
  camelCase();
  pascalCase();
  snakeCase();
  screamingSnakeCase();
  kebabCase();
  screamingKebabCase();
});

// camel-case
function camelCase() {
  let inbox = inputText.value;

  // Splitting the input text by spaces to process each word separately
  let words = inbox.split(" ");

  for (let i = 0; i < words.length; i++) {
    // Converting the first character of each word to lowercase
    if (i === 0) {
      words[i] = words[i].toLowerCase();
    } else {
      // Capitalizing the first character of each subsequent word
      words[i] =
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }

  // Joining the modified words back into a single string
  let camelCasedText = words.join("");

  let output = document.querySelector("#camel-case");
  output.innerHTML = camelCasedText;
}

// pascal-case
function pascalCase() {
  let inbox = inputText.value;
  let words = inbox.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }

  let pascalCasedText = words.join("");

  let output = document.querySelector("#pascal-case");
  output.innerHTML = pascalCasedText;
}

// snake-case
function snakeCase() {
  let inbox = inputText.value;
  let words = inbox.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
  }

  let snakeCasedText = words.join("_");

  let output = document.querySelector("#snake-case");
  output.innerHTML = snakeCasedText;
}

// screaming-snake-case
function screamingSnakeCase() {
  let inbox = inputText.value;
  let words = inbox.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toUpperCase();
  }

  let screamingSnakeCasedText = words.join("_");

  let output = document.querySelector("#screaming-snake-case");
  output.innerHTML = screamingSnakeCasedText;
}

// kebab-case
function kebabCase() {
  let inbox = inputText.value;
  let words = inbox.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
  }

  let kebabCasedText = words.join("-");

  let output = document.querySelector("#kebab-case");
  output.innerHTML = kebabCasedText;
}

// screaming-kebab-case
function screamingKebabCase() {
  let inbox = inputText.value;
  let words = inbox.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toUpperCase();
  }

  let screamingSnakeCasedText = words.join("-");

  let output = document.querySelector("#screaming-kebab-case");
  output.innerHTML = screamingSnakeCasedText;
}
