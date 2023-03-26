const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const userScore = document.querySelector("#playerscore");
const cpuScore = document.querySelector("#cpuscore");
const commentator = document.querySelector(".commentator");

let userChoice;

rockButton.addEventListener('click', () => {
    userChoice = 'rock';
    playRound();
});

paperButton.addEventListener('click', () => {
    userChoice = 'paper';
    playRound();
});

scissorsButton.addEventListener('click', () => {
    userChoice = 'scissors';
    playRound();
});

let choices = ['rock', 'paper', 'scissors'];

let userPoint = false;
let cpuPoint = false

function scoreBoard(){
    if (userPoint === true) {
        userScore.textContent = parseInt(userScore.textContent) + 1;
        commentator.innerText = "Nice! Point for you."
    } else if (cpuPoint === true) {
        cpuScore.textContent = parseInt(cpuScore.textContent) + 1;
        commentator.innerText = "owch, point for cpu"
    } else if (cpuPoint === false && userPoint === false) {
        commentator.innerText = "Oop, its a draw"
    }
}

function playRound() {
    let randomCpu = Math.floor(Math.random() * choices.length);
    let cpuChoice = choices[randomCpu];
    if ((userChoice === 'rock' && cpuChoice === 'scissors') || 
        (userChoice === 'scissors' && cpuChoice === 'paper') || 
        (userChoice === 'paper' && cpuChoice === 'rock')) {
            userPoint = true;
            cpuPoint = false;
            scoreBoard();
            
        } else if ((cpuChoice === 'rock' && userChoice === 'scissors') || 
                   (cpuChoice === 'scissors' && userChoice === 'paper') || 
                   (cpuChoice === 'paper' && userChoice === 'rock')) {
                        cpuPoint = true;
                        userPoint = false;
                        scoreBoard();
                    } else if (userChoice === cpuChoice) {
                        userPoint = false;
                        cpuPoint = false;
                        scoreBoard();
                    }
} 


