    //Estoy cansado x12

const container = document.querySelector('#container')
let parrafo = document.createElement('div');
let h3h = document.createElement('h3');
let div2 = document.createElement('div');
let h1h = document.createElement('h1');
let lastp = document.createElement('p')



parrafo.style.cssText = 'color:red'
parrafo.textContent = 'Hey I’m red!'
container.appendChild(parrafo);

h3h.style.cssText = 'color:blue'
h3h.textContent = 'Im blue h3 motherfucker'
container.appendChild(h3h);

div2.style.cssText = 'background-color: pink; border: 1px solid #000'
container.appendChild(div2);

h1h.textContent = 'Im in a div'
div2.appendChild(h1h);

lastp.textContent = 'Me too!'
div2.appendChild(lastp);



