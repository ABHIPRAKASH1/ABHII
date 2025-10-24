const memories = document.querySelectorAll('.memory');
memories.forEach((mem, i) => {
  mem.style.top = `${Math.random() * 200}px`; 
  mem.style.left = `${Math.random() * window.innerWidth}px`;
  mem.style.animationDelay = `${i * 2}s`;
});

const surpriseBtn = document.querySelector('.surprise-btn');
const surpriseNote = document.querySelector('.surprise-note');

surpriseBtn.addEventListener('click', () => {
  surpriseNote.classList.toggle('hidden');
});