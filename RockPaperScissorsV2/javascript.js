
let rock = document.querySelector('.rock');
let contadorP = document.querySelector('.scorePlayer');
let contadorB = document.querySelector('.scoreBot');

let suma = '2'




rock.addEventListener('click', () => {
    contadorP.textContent = `${suma}` ;
  });

 