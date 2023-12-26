function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  function createBoxes() {
    const amountInput = document.querySelector('#controls input');
    const boxesContainer = document.querySelector('#boxes');

    
    const amount = parseInt(amountInput.value);
    if (isNaN(amount) || amount < 1 || amount > 100) {
      alert('Please enter a valid number between 1 and 100.');
      return;
    }

   
    destroyBoxes();

    
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
    }

   
    amountInput.value = '';
  }

  function destroyBoxes() {
    const boxesContainer = document.querySelector('#boxes');
    boxesContainer.innerHTML = '';
  };