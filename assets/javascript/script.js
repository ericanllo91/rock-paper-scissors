//player = prompt("Rock Paper or Scissors? ");
/*player = player.toLowerCase();

if (player === 'rock'){
    player = 1 ;
} else if (player === 'paper') {
    player = 2 ;
} else if (player === 'scissors'){
    player = 3 ;
}
console.log("PLAYER CHOSE" + player); */

let counterComputer = 0;
let counterPlayer = 0;
let computerSelect = document.querySelector('.computerSelect');
let computerText = ''
let toWin = document.querySelector('.toWin');
let winner = document.createElement('div');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');

function game(e){
    //COMPUTER SELECTS
    let computer = Math.floor((Math.random() * 3) + 1);
    if (computer === 1) {
        computerText = 'ROCA'
    } else if (computer === 2){
        computerText = 'PAPEL'
    } else if (computer === 3){
        computerText = 'TIJERAS'
    }
    computerSelect.textContent = computerText;
    //PLAYER TURN
    let player = 0
    if (this.id === 'rock'){
        player = 1 ;
    } else if (this.id === 'paper') {
        player = 2 ;
    } else if (this.id === 'scissors'){
        player = 3 ;
    }
    // --------------------- DECISION
    if (player === computer) {
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
    console.log(counterPlayer, counterComputer)
    // ----> scores into the boxes
    playerScore.textContent = counterPlayer;
    computerScore.textContent = counterComputer;



    // ---> When you reach 5 STOP!
    if (counterComputer === 5){
        winner.textContent = 'COMPUTER'
        toWin.appendChild(winner)
        alert('STOP COMPUTER WON')
    } else if (counterPlayer ===5){
        winner.textContent = 'PLAYER'
        toWin.appendChild(winner)
        alert('STOP PLAYER WON')
    }







}




const decision = document.querySelectorAll('button');
decision.forEach( decide => decide.addEventListener('click', game));





