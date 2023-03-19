// Variables html
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let contadorP = document.querySelector('.scorePlayer');
let contadorB = document.querySelector('.scoreBot');

// variables lógica juego
let puntosPlayer = 0;
let puntosBot = 0;
const lista = ['rock', 'paper', 'scissors'];
let playerSelection = null;

// event listeners for player selections
rock.addEventListener('click', () => {
  playerSelection = 'rock';
  playRound();
});

paper.addEventListener('click', () => {
  playerSelection = 'paper';
  playRound();
});

scissors.addEventListener('click', () => {
  playerSelection = 'scissors';
  playRound();
});

// function to play a round
function playRound() {
  let botSelection = lista[Math.floor(Math.random() * lista.length)];
  
  if (playerSelection === botSelection){
    return;
  }

  else if(playerSelection === "rock" && botSelection === 'scissors'||
          playerSelection === "paper" && botSelection === 'rock'||
          playerSelection === "scissors" && botSelection === 'paper'){
            puntosPlayer++;
           }

  else if(botSelection === "rock" && playerSelection === 'scissors'||
          botSelection === "paper" && playerSelection === 'rock'||
          botSelection === "scissors" && playerSelection === 'paper') {
            puntosBot++;
  }
  
  contadorP.textContent = `${puntosPlayer}`;
  contadorB.textContent = `${puntosBot}`;
  
  // check for game over
  if (puntosPlayer >= 3 || puntosBot >= 3) {
    alert("Game over!");
  }
}