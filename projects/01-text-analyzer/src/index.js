import analyzer from './analyzer.js';

// Seleciona o textarea pelo atributo name
const textInput = document.querySelector('textarea[name="user-input"]');
// Seleciona o botão pelo id permitido
const clearButton = document.getElementById('reset-button');
// Seleciona todos os <li> das métricas
const metricsList = document.querySelectorAll('ul > li');

// Função para atualizar as métricas nos <li>
function updateResults(text) {
  const results = [
    `words: ${analyzer.getWordCount(text)}`,
    `characters: ${analyzer.getCharacterCount(text)}`,
    `characters (no spaces): ${analyzer.getCharacterCountExcludingSpaces(text)}`,
    `average word length: ${analyzer.getAverageWordLength(text)}`,
    `numbers: ${analyzer.getNumberCount(text)}`,
    `sum of numbers (out of words): ${analyzer.getNumberSum(text)}`
  ];
  metricsList.forEach((li, i) => {
    li.textContent = results[i];
  });
}

// Atualiza ao digitar
textInput.addEventListener('input', () => {
  updateResults(textInput.value);
});

// Limpa textarea e métricas ao clicar
clearButton.addEventListener('click', () => {
  textInput.value = '';
  updateResults('');
});

// Inicializa com valores zerados
updateResults('');