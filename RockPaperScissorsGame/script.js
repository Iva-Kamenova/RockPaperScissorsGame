const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const reset = document.getElementById("reset");

rock.addEventListener("click", () => youChoose(rock));
paper.addEventListener("click", () => youChoose(paper));
scissors.addEventListener("click", () => youChoose(scissors));
reset.addEventListener("click", () => resetGame());

let personalScore = 0;
let computerScore = 0;
let personalChoice, computerChoice;

const para = document.createElement("p");
para.textContent = "";
document.body.appendChild(para);

function youChoose(choice) {
  personalChoice = choice.id;
  computerChoose();
}

function computerChoose() {
  const options = ["rock", "paper", "scissors"];
  computerChoice = options[Math.floor(Math.random() * options.length)];
  getResult(para, personalChoice, computerChoice);
}

function getResult(para, personalChoice, computerChoice) {
  para.textContent = `Computer chooses ${computerChoice}. `;
  if (personalChoice === computerChoice) {
    para.textContent += "Nobody wins!";
  } else if (
    (personalChoice === "rock" && computerChoice === "scissors") ||
    (personalChoice === "scissors" && computerChoice === "paper") ||
    (personalChoice === "paper" && computerChoice === "rock")
  ) {
    para.textContent += "You win!";
    personalScore++;
  } else {
    para.textContent += "Computer wins!";
    computerScore++;
  }
  document.getElementById("personal").textContent = personalScore;
  document.getElementById("computer").textContent = computerScore;
}

function resetGame() {
  personalScore = 0;
  computerScore = 0;
  document.getElementById("personal").textContent = 0;
  document.getElementById("computer").textContent = 0;
  para.textContent = "";
}
