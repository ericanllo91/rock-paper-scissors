let choices = ['Rock', 'Paper', 'Scissors'];
function computerPlay () {
    let result = choices[Math.floor(Math.random() * choices.length)];
    return result;
}

function playRound (playerChoice, computerChoice) {
    let playerSelection = prompt("Choose: Rock/Paper/Scissors",'');
    let computerSelection = computerPlay();
    if (playerSelection.toLowerCase() == "Rock".toLowerCase()) {
        if (computerSelection === "Scissors") {
            ++playerScore
            return "You win! Rock beats Scissors.";
        }else if(computerSelection === "Paper"){
            ++compScore
            return "You lose! Paper beats rock.";
        }else {
            return "Tie!"
        }
    }else if (playerSelection.toLowerCase() === "Paper".toLowerCase()) {
        if (computerSelection === "Scissors") {
            ++compScore
            return "You lose! Scissors beats Paper!";
        }else if (computerSelection === "Rock") {
            ++playerScore
            return "You win! Paper beats Rock!";
        }else if(computerSelection === "Paper"){
            return "Tie!";
        }
    }else if(playerSelection.toLowerCase() === "Scissors".toLowerCase()) {
        if (computerSelection === "Rock") {
            ++compScore
            return "You lose! Rock beats Scissors!";
        }else if (computerSelection === "Paper") {
            ++playerScore
            return "You win! Paper beats Rock!";
        }else {
            return "Tie!"
        }
    }
}
function game() {
    console.log (playRound());
    console.log (playRound());
    console.log (playRound());
    console.log (playRound());
    console.log (playRound());
    if (playerScore > compScore) {
        return "You Win the game!!!!";
    }else if (playerScore < compScore) {
        return "You Lost the game to a computer!";
    }else {
        return "It's a Draw!";
    }
}
let playerScore = 0;
let compScore = 0;