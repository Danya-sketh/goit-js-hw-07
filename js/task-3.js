const nameInput = document.querySelectorAll('name-input');
const nameOutput = document.querySelectorAll('name-output');

nameInput.addEventListener('input', updateGreeting);

function updateGreeting() {
  
  const inputText = nameInput.value.trim();

  
  const outputText = inputText !== '' ? inputText : 'Anonymous';

 
  nameOutput.textContent = outputText;
}