
const clickers = document.querySelectorAll('.clicker');
const texts = document.querySelectorAll('.text');

for (let i = 0; i < texts.length; i++) {
  texts[i].style.display = 'none';
}

clickers.forEach((clicker, index) => {
  clicker.addEventListener('click', () => {
    texts[index].style.display = (texts[index].style.display === "none") ? "block" : "none";
  });
});