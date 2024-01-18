const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('#input', updateGreeting);

function updateGreeting() {
  
  const inputText = nameInput.value.trim();

  
  const outputText = inputText !== '' ? inputText : 'Anonymous';

 
  nameOutput.textContent = outputText;
}