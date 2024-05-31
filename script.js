/* display rock paper scissors and ask user to pick one
    store the user's pick in a variable.
    pick random choice from array and store it in variable.
 * if userInput does not equal any of the three options display alert.
else if the user input and the random choice are the same.. Draw
else if 
 */
let PlayerScore = 0;
let ComputerScore = 0;

function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    return computerChoice;
}

function getUserChoice() {
    let userInput = prompt("Pick rock, paper or scissors: ");
    userInput = userInput.toLowerCase();
    return userInput;
}

function playGame() {

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
                } else if(computerChoice === "paper") {
                    ComputerScore++
                    alert("You lose! computer picked paper, Computer score is " + ComputerScore);
                }
                break;
            case "paper":
                if(computerChoice === "rock") {
                    PlayerScore++
                    alert("You win! Paper beats Rock");
                } else if(computerChoice === "scissors"){
                    ComputerScore++
                    alert("You lose! computer picked scissors");                }
                break;
            case "scissors":
                if(computerChoice === "paper") {
                    PlayerScore++
                    alert("You win! Scissors beats paper");
                } else if(computerChoice === "rock"){
                    ComputerScore++
                    alert("You lose! computer picked rock");
                }
                break;
        }
    }
}


while(true) {

    userInput = getUserChoice();
    computerChoice = getComputerChoice();
    playGame();
    console.log(playGame.ComputerScore, playGame.PlayerScore);
}