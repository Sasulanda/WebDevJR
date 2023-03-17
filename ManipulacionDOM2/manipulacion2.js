let openBtn = document.getElementById("open-btn");
let closebtn = document.getElementsByClassName("close-btn")[0];
let container = document.querySelector(".model-container");

openBtn.addEventListener('click', function(){
    container.style.display = 'block';
});

closebtn.addEventListener('click', function(){
    container.style.display = 'none';
});

window.addEventListener('click', function(e){
    if (e.target === container) {
        container.style.display = 'none';
    }
});