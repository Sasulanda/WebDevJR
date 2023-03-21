let p8 = document.querySelector('.p8');
let p16 = document.querySelector('.p16');
let p32 = document.querySelector('.p32');
let paper = document.querySelector('.paper');



// Funcion para crear la cuadricula
function createGrid(numSquares) {
    for(let i=0; i<numSquares*numSquares; i++){
      let cuadraditos = document.createElement('div');
      cuadraditos.classList.add('cuadraditos')
      paper.appendChild(cuadraditos)
    };
    paper.style.cssText = `grid-template-columns: repeat(${numSquares}, 1fr);grid-template-rows: repeat(${numSquares}, 1fr);grid-gap: 2px; `
    // Dibujar
    let cuadraditos = document.querySelectorAll('.cuadraditos');
    for (let i = 0; i < cuadraditos.length; i++){
      cuadraditos[i].addEventListener('click', () => {
        cuadraditos[i].style.backgroundColor = '#000'
      })
    };
  }

p8.addEventListener('click', () => {
  paper.innerHTML = '';
  createGrid(8);
});

p16.addEventListener('click', () => {
  paper.innerHTML = '';
  createGrid(16);
});

p32.addEventListener('click', () => {
  paper.innerHTML = '';
  createGrid(32);
});

let cuadraditos = document.querySelectorAll('.cuadraditos');
    for (let i = 0; i < cuadraditos.length; i++){
      cuadraditos[i].addEventListener('click', () => {
        cuadraditos[i].style.backgroundColor = '#000'
      })
    };