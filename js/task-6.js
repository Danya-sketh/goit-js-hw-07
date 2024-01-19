// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, '0')}`;
//   }

//   function createBoxes() {
//     const amountInput = document.querySelector('#controls input');
//     const boxesContainer = document.querySelector('#boxes');

    
//     const amount = parseInt(amountInput.value);
//     if (isNaN(amount) || amount < 1 || amount > 100) {
//       alert('Please enter a valid number between 1 and 100.');
//       return;
//     }

   
//     destroyBoxes();

    
//     for (let i = 0; i < amount; i++) {
//       const box = document.createElement('div');
//       box.style.width = `${30 + i * 10}px`;
//       box.style.height = `${30 + i * 10}px`;
//       box.style.backgroundColor = getRandomHexColor();
//       boxesContainer.appendChild(box);
//     }

   
//     amountInput.value = '';
//   }

//   function destroyBoxes() {
//     const boxesContainer = document.querySelector('#boxes');
//     boxesContainer.innerHTML = '';
//   };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';

  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);

    boxSize += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function () {
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const input = document.querySelector('input');

  createButton.addEventListener('click', function () {
    const amount = parseInt(input.value);

    if (isNaN(amount) || amount < 1 || amount > 100) {
      alert('Please enter a valid number between 1 and 100.');
      return;
    }

    createBoxes(amount);
    input.value = '';
  });

  destroyButton.addEventListener('click', destroyBoxes);
});