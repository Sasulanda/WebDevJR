// Variables html
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let contadorP = document.querySelector('.scorePlayer');
let contadorB = document.querySelector('.scoreBot');

// variables lógica juego
let puntosPlayer = 0
let puntosBot = 0
const lista = ['rock', 'paper', 'scissors']

// BO5

// Cuando el contador de alguno de los jugadores
// llegue a 3, el juego se termina

while(puntosPlayer < 3 && puntosBot < 3){
  let botSelection = lista[Math.floor(Math.random() * lista.length)];
  let playerSelection = lista[Math.floor(Math.random() * lista.length)];
  
  if (playerSelection === botSelection){
    continue
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
  contadorP.textContent = `${puntosPlayer}` ;
  contadorB.textContent = `${puntosBot}` ;
};



rock.addEventListener('click', () => {
    contadorP.textContent = `${puntosPlayer}` ;
  });

