// Variables html
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let contadorP = document.querySelector('.scorePlayer');
let contadorB = document.querySelector('.scoreBot');
let playAgain = document.querySelector('.finish');
let playAgainButtom = document.querySelector('.playAgain')
let robotText = document.querySelector('.eleccionRobot')
let wl = document.querySelector('.wl')

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

playAgainButtom.addEventListener('click', () => {
  puntosBot = 0;
  puntosPlayer = 0;
  playAgain.style.display = 'none';
  contadorP.textContent = `${puntosPlayer}`;
  contadorB.textContent = `${puntosBot}`;
  playAgainButtom.style.backgroundColor = 'red'

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
            robotText.textContent ='poronga.';
            wl.textContent ='Ganaste';
            wl.style.color = 'green';
           }

  else if(botSelection === "rock" && playerSelection === 'scissors'||
          botSelection === "paper" && playerSelection === 'rock'||
          botSelection === "scissors" && playerSelection === 'paper') {
            puntosBot++
            robotText.textContent ='masa.';
            wl.textContent ='Perdiste'
            wl.style.color = 'red';
  }
  
  contadorP.textContent = `${puntosPlayer}`;
  contadorB.textContent = `${puntosBot}`;
  
  // check for game over
  if (puntosPlayer >= 3) {
    playAgain.style.display = 'flex';
    playAgain.style.backgroundColor = 'green'
    playAgainButtom.style.backgroundColor = 'green'


  }
  if (puntosBot >= 3) {
    playAgain.style.display = 'flex';
    playAgain.style.backgroundColor = 'red'
  }
}