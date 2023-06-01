let userScoreVal = document.querySelector("#userScoreVal");
let compScoreVal = document.querySelector("#compScoreVal");

let selectRock = document.querySelector("#r");
let selectPaper = document.querySelector("#p");
let selectScissors = document.querySelector("#s");

let resultUserStat = document.querySelector("#result-user-stat");
let resultCompStat = document.querySelector("#result-comp-stat");
let resultFinalStat = document.querySelector("#result-final-stat");

let rockImage = "Images/rock.png";
let paperImage = "Images/paper.png";
let scissorImage = "Images/scissors.png";

let userChoice = "";

// if user click rock button
selectRock.addEventListener("click", () => {
  userChoice = "rock";
  resultUserStat.innerHTML = "User: " + "<img src='" + rockImage + "'>";
  compChoice();
  winner();
});

// if user click paper button
selectPaper.addEventListener("click", () => {
  userChoice = "paper";
  resultUserStat.innerHTML = "User: " + "<img src='" + paperImage + "'>";
  compChoice();
  winner();
});

// if user click scissor button
selectScissors.addEventListener("click", () => {
  userChoice = "scissors";
  resultUserStat.innerHTML = "User: " + "<img src='" + scissorImage + "'>";
  compChoice();
  winner();
});

// computer-choice
function compChoice() {
  let choices = [];
  choices.push(selectRock, selectPaper, selectScissors);
  let randomIndex = Math.floor(Math.random() * choices.length);
  let choice = choices[randomIndex];

  let imageSource = "";
  let compSelect = "";
  if (choice === selectRock) {
    imageSource = rockImage;
    compSelect = "rock";
  } else if (choice === selectPaper) {
    imageSource = paperImage;
    compSelect = "paper";
  } else if (choice === selectScissors) {
    imageSource = scissorImage;
    compSelect = "scissors";
  }
  resultCompStat.innerHTML = "Computer: " + "<img src='" + imageSource + "'>";

  return compSelect;
}

function winner() {
  let computerChoice = compChoice();

  if (userChoice === computerChoice) {
    resultFinalStat.innerHTML = "It's a Tie !";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultFinalStat.innerHTML = "Winner: User";
    userScoreVal.innerText = Number(userScoreVal.innerText) + 1;
  } else {
    resultFinalStat.innerHTML = "Winner: Computer";
    compScoreVal.innerText = Number(userScoreVal.innerText) + 1;
  }
}
