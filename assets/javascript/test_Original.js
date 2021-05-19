//1 - Start Github - name rock-paper-scissors
//2 - Link JS to HTML

//3 Function for computerPlay
function computerPlay() {
    return Math.floor((Math.random() * 3) + 1);
}

//4 Function game
function game(player, machine){
    let counterPlayer = 0;
    let counterComputer = 0;

    while (counterPlayer < 5 && counterComputer < 5 ) {
        console.log(counterPlayer, counterComputer)
        player = prompt("Rock Paper or Scissors? ");
        player = player.toLowerCase();

        if (player === 'rock'){
            player = 1 ;
        } else if (player === 'paper') {
            player = 2 ;
        } else if (player === 'scissors'){
            player = 3 ;
        }
        console.log("PLAYER CHOSE" + player);
        machine = computerPlay();
        console.log("MACHINE CHOSE" + machine);
        if (player === machine) {
        } else if (player === 1 && machine === 2) {
            counterComputer += 1
        } else if (player === 1 && machine === 3) {
            counterPlayer += 1
        } else if (player === 2 && machine === 1) {
            counterPlayer += 1
        } else if (player === 2 && machine === 3) {
            counterComputer += 1
        } else if (player === 3 && machine === 1) {
            counterComputer += 1
        } else if (player === 3 && machine === 2) {
            counterPlayer += 1
        }
    }
    if (counterComputer === 5) {
        return 'YOU ARE A WINNER COMPUTER'
    } else if (counterPlayer === 5) {
        return 'YOU ARE A WINNER PLAYER';
    }
}

console.log(game())