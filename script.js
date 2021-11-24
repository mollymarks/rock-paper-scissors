const outcome = document.querySelector(".outcome > p");
const userScoreP = document.querySelector('#user-score');
const compScoreP = document.querySelector('#comp-score');
const possibleChoices = document.querySelectorAll('button');
const userChoiceDisplay = document.querySelector('#hint');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const restartButton = document.getElementById('restart');

let playerScore = 0;
let compScore = 0;

rockButton.addEventListener('click', function(){
    userChoiceDisplay.innerHTML = 'You chose rock';
    singleRound('rock', computerPlay());
})

paperButton.addEventListener('click', function(){
    userChoiceDisplay.innerHTML = 'You chose paper';
    singleRound('paper', computerPlay());
})

scissorsButton.addEventListener('click', function(){
    userChoiceDisplay.innerHTML = 'You chose scissors';
    singleRound('scissors', computerPlay());
})





function computerPlay(){

    function getRandomItem(items) {
        return items[Math.floor(Math.random() * 3)];
    }

    let choices = ['rock', 'paper', 'scissors']
    let compChoice = getRandomItem(choices);

    return compChoice;
}



function singleRound(playerSelection, computerSelection){
    let player = playerSelection
    let computer = computerSelection
    
    if (player == computer){
        outcome.innerHTML = "Computer chose " + computer + ". It's a Draw.";
        return 'draw'
    }
    else if (
        (player == 'rock' && computer == 'scissors') ||
        (player == 'scissors' && computer == 'paper') ||
        (player == 'paper' && computer == 'rock')
    ){
        playerScore += 1;
        userScoreP.innerHTML = playerScore;
        outcome.innerHTML = "Computer chose " + computer + ". You Win!!";
        return 'win'
    }
    else if (
        (player == 'rock' && computer == 'paper') ||
        (player == 'paper' && computer == 'scissors') ||
        (player == 'scissors' && computer == 'rock')
    ){
        compScore += 1;
        compScoreP.innerHTML = compScore;
        outcome.innerHTML = "Computer chose " + computer + ". You Lose :(";
        return 'lose'
    }
}



/*function game(){
    for (let i = 0; i < 5; i++){
        let roundCompChoice = computerPlay();

        let round = singleRound(userChoice, roundCompChoice);
        round;
        if (round == 'win'){
            playerScore += 1;
            outcome.innerHTML = "Computer played " + roundCompChoice + ", You Win!";
            userScoreP.innerHTML = playerScore;
            compScoreP.innerHTML = compScore;
        }
        else if (round == 'lose'){
            compScore += 1;
            outcome.innerHTML = "Computer played " + roundCompChoice + ", You Lose :("
            userScoreP.innerHTML = playerScore;
            compScoreP.innerHTML = compScore;
        }
        else {
            outcome.innerHTML = "Computer played " + roundCompChoice + ", It's a Draw."
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

*/
