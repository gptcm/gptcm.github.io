function createRain() {
  const container = document.querySelector('.rain-container');
  const dropCount = 100;

  for (let i = 0; i < dropCount; i++) {
    const drop = document.createElement('div');
    drop.classList.add('drop');
    
    drop.style.left = Math.random() * 100 + 'vw';
    drop.style.animationDuration = Math.random() * 0.5 + 0.5 + 's';
    drop.style.animationDelay = Math.random() * 2 + 's';
    drop.style.width = Math.random() * 3 + 1 + 'px';
    drop.style.height = Math.random() * 20 + 10 + 'px';

    container.appendChild(drop);
  }
}

document.addEventListener('DOMContentLoaded', createRain);