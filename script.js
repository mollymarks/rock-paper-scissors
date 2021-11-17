function computerPlay(){

    function getRandomItem(items) {
        return items[Math.floor(Math.random() * 3)];
    }

    let choices = ['rock', 'paper', 'scissors']
    let compChoice = getRandomItem(choices);

    return compChoice;
}

function singleRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection
    
    if (player == computer){
        return "It's a Draw!"
    }
    else if (
        (player == 'rock' && computer == 'scissors') ||
        (player == 'scissors' && computer == 'paper') ||
        (player == 'paper' && computer == 'rock')
    ){
        return "You Win!!"
    }
    else if (
        (player == 'rock' && computer == 'paper') ||
        (player == 'paper' && computer == 'scissors') ||
        (player == 'scissors' && computer == 'rock')
    ){
        return "You Lose :("
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        let roundCompChoice = computerPlay();
        let round = singleRound(playerSelection, roundCompChoice);
        console.log(round);
        if (round == 'You Win!!'){
            playerScore += 1;
            console.log('Player: ' + playerScore);
            console.log('Computer: ' + compScore);
        }
        else if (round == 'You Lose :('){
            compScore += 1;
            console.log('Player: ' + playerScore);
            console.log('Computer: ' + compScore);
        }
        else {
            console.log('Player: ' + playerScore);
            console.log('Computer: ' + compScore);
        }
    }
    if (playerScore > compScore){
        return 'Game Over, You Win!'
    }
    else if (compScore > playerScore){
        return 'Game Over, Computer Wins'
    }
    else {
        return "Game Over, It's A Tie"
    }
}



let playerScore = 0;
let compScore = 0;
const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(game());


