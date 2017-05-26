function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  let colors = ['#760CE8', '#4782B1', '#E8890C', '#ff0000', '#551A8B' ];

  let changeBorder = function() {
      document.getElementsByClassName('playing')[0].style.borderColor = colors[Math.floor(Math.random()*colors.length)];
  };

  changeBorder();

}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
