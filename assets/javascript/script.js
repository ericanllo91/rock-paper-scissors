
// --> SCORES
let counterComputer = 0;
let counterPlayer = 0;
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');

// --> RESULTS
let computerSelect = document.querySelector('.computerSelect');
let computerText = ''
let toWin = document.querySelector('.toWin');
let winner = document.createElement('div');


// --> SVG HTML
const redHand = document.querySelector('.iconHandRed');
const greenHand = document.querySelector('.iconHandGreen');
const redRock = document.querySelector('.iconRockRed');
const greenRock = document.querySelector('.iconRockGreen');
const redScissors = document.querySelector('.iconScissorsRed');
const greenScissors = document.querySelector('.iconScissorsGreen');


function game(e){

    //PLAYER TURN
    let player = 0
    if (this.id === 'rock'){
        player = 1 ;
    } else if (this.id === 'paper') {
        player = 2 ;
    } else if (this.id === 'scissors'){
        player = 3 ;
    }
    // -->
    //COMPUTER SELECTS
    let computer = Math.floor((Math.random() * 3) + 1);
    if (computer === 1) {
        computerText = 'ROCK'
    } else if (computer === 2){
        computerText = 'PAPER'
    } else if (computer === 3){
        computerText = 'SCISSORS'

    }
    computerSelect.textContent = computerText;
    // --------------------- DECISION
    let oldComputerCounter = counterComputer
    let oldPlayerCounter = counterPlayer
    if (player === computer) {
        playerScore.style.background = 'orange'
        computerScore.style.background = 'orange'
    } else if (player === 1 && computer === 2) {
        counterComputer += 1

    } else if (player === 1 && computer === 3) {
        counterPlayer += 1
    } else if (player === 2 && computer === 1) {
        counterPlayer += 1
    } else if (player === 2 && computer === 3) {
        counterComputer += 1

    } else if (player === 3 && computer === 1) {
        counterComputer += 1

    } else if (player === 3 && computer === 2) {
        counterPlayer += 1
    }

    if (counterComputer > oldComputerCounter) {
        computerScore.style.background = 'lightgreen'
        playerScore.style.background = 'red'
    } else if (counterPlayer > oldPlayerCounter) {
        playerScore.style.background = 'lightgreen'
        computerScore.style.background = 'red' }


    console.log(counterPlayer, counterComputer)
    // ----> scores into the boxes
    playerScore.textContent = 'Player Score  ' + counterPlayer;
    computerScore.textContent = 'Computer Score ' + counterComputer;



    // ---> When you reach 5 STOP!
    if (counterComputer === 5){
        winner.textContent = 'THE WINNER IS COMPUTER'
        winner.style.fontSize = '100px'
        toWin.appendChild(winner)
        alert('STOP COMPUTER WON')

    } else if (counterPlayer ===5){
        winner.textContent = 'YOU WON'
        winner.style.fontSize = '100px'
        toWin.appendChild(winner)
        alert('STOP YOU WON')

    }







}




const decision = document.querySelectorAll('button');
decision.forEach( decide => decide.addEventListener('click', game));





