console.log("Hey there👋. It's nice to see you here 😊. What do you think about this game. Isn't it awesome❓❗ If you would like to shere with me your opinion  catch my at my social media channels or send me a message: oriana.koziorynska@gmail.com 💬. Have a nice day and till the next time👋");

const choices = document.querySelectorAll('.gameBoard__choice');
let userScore = 0;
let computerScore = 0;
let userScoreSpan = document.querySelector('.gameBoard__userScore');
let computerScoreSpan = document.querySelector('.gameBoard__computerScore');
let gameMsg = document.querySelector('.gameBoard__gameText-msg');
const audioL = document.querySelector('audio[data-sound="loose"]');
const audioW = document.querySelector('audio[data-sound="win"]');
const audioD = document.querySelector('audio[data-sound="draw"]')
const restartButton = document.querySelector('.gameBoard__restart-btn')

const playGame = e => {
    const userMove = e.target.id;
    const computerMove = getComputerChoice();
    checkWinner(userMove, computerMove);
    displayScore(userScore, computerScore);
}

const getComputerChoice = moves => {
    moves = ['rock', 'paper', 'scissors'];
    const computer = moves[Math.floor(Math.random() * moves.length)];
    return computer;
}

const checkWinner = (userMove, computerMove) => {
    if (userMove === computerMove) {
        gameMsg.innerHTML = `Your move is ${userMove}, and compuer move is ${computerMove}. It's a draw.`;
        audioD.currentTime = 0;
        audioD.play();
    }
    if ((userMove === 'rock' && computerMove == 'scissors') || (userMove === 'paper' && computerMove === 'rock') || (userMove === 'scissors' && computerMove === 'paper')) {
        gameMsg.innerHTML = `Your move is ${userMove}, and computer move is ${computerMove}. You win!`
        userScore++;
        audioW.currentTime = 0;
        audioW.play();
    }
    if ((userMove === 'paper' && computerMove === 'scissors') || (userMove === 'rock' && computerMove === 'paper') || (userMove === 'scissors' && computerMove === 'rock')) {
        gameMsg.innerHTML = `Your move is ${userMove}, and computer move is ${computerMove}. Computer win`;
        computerScore++;
        audioL.currentTime = 0;
        audioL.play();
    }
    return [userScore, computerScore]
}

const displayScore = () => {
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
}

const restartGame = () => {
    userScoreSpan.innerHTML = "0";
    computerScoreSpan.innerHTML = "0";
    userScore = 0;
    computerScore = 0;
    gameMsg.innerHTML = 'Make your move and choose one hand';
}

choices.forEach(choice => choice.addEventListener('click', playGame));
restartButton.addEventListener('click', restartGame);