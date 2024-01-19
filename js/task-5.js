

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const onclick = document.querySelector('button')

onclick.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  const body = document.body;
  const colorSpan = document.querySelector('.color');
  
  const randomColor = getRandomHexColor();
  
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
  
  console.log('New color:', randomColor);
}

