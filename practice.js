let PlayerScore = 0;
let ComputerScore = 0;

function reset() {

    if(PlayerScore == 5) {
        alert("You won " + PlayerScore + " to " + ComputerScore);
        window.location.reload();
    } else if(ComputerScore == 5) {
        alert("You lost " + ComputerScore + " to " + PlayerScore);
        window.location.reload();
    } else if(PlayerScore && ComputerScore == 5) {
        alert("Draw");
        window.location.reload();
    } else {
        console.log("reset");
    }
}


function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    return computerChoice;
}

const lastP = document.querySelector('#playerScore');
const lastC = document.querySelector('#computerScore');
function playGame(userInput, computerChoice) {

        if(userInput !== "rock" && userInput !== "paper" && userInput !== "scissors") {
            alert("Please enter rock, paper or scissors");
        } else if (userInput === computerChoice) {
            alert(`Draw you both picked ` + userInput);
        } else if (userInput !== computerChoice) {
            switch(userInput) {
                case "rock":
                    if(computerChoice === "scissors") {
                        PlayerScore++
                        alert("You win! Rock beats Scissors, Your score is " + PlayerScore);
                        lastP.innerText = lastP.innerText.replace(/\d+$/, PlayerScore);
                    } else if(computerChoice === "paper") {
                        ComputerScore++
                        alert("You lose! computer picked paper, Computer score is " + ComputerScore);
                        lastC.innerText = lastC.innerText.replace(/\d+$/, ComputerScore);
                    }
                    break;
                case "paper":
                    if(computerChoice === "rock") {
                        PlayerScore++
                        alert("You win! Paper beats Rock " + PlayerScore);
                        lastP.innerText = lastP.innerText.replace(/\d+$/, PlayerScore);
                    } else if(computerChoice === "scissors"){
                        ComputerScore++
                        alert("You lose! computer picked scissors " + ComputerScore);
                        lastC.innerText = lastC.innerText.replace(/\d+$/, ComputerScore);
                    }
                    break;
                case "scissors":
                    if(computerChoice === "paper") {
                        PlayerScore++
                        alert("You win! Scissors beats paper "  + PlayerScore);
                        lastP.innerText = lastP.innerText.replace(/\d+$/, PlayerScore);
                    } else if(computerChoice === "rock"){
                        ComputerScore++
                        alert("You lose! computer picked rock " + ComputerScore);
                        lastC.innerText = lastC.innerText.replace(/\d+$/, ComputerScore);
                    }
                    break;
            }
        }
    }


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playGame('rock', getComputerChoice());
    reset();
})
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playGame('paper', getComputerChoice());
    reset();
})
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playGame('scissors', getComputerChoice());
    reset();
})
