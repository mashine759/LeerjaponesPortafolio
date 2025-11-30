const words = document.querySelectorAll('.word');
const infoBox = document.getElementById('infoBox');
const jp = document.getElementById('japaneseWord');
const kana = document.getElementById('kana');
const esp = document.getElementById('meaning');

words.forEach(word => {
  word.addEventListener('click', () => {
    jp.textContent = word.textContent;
    kana.textContent = word.dataset.kana;
    esp.textContent = word.dataset.esp;

    infoBox.classList.remove('hidden');
  });
});

// ocultar tocando afuera
document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('word')) {
    infoBox.classList.add('hidden');
  }
});
