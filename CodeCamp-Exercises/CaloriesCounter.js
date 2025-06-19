const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

//Quel "\" nell'assegnazione del regex è importantissimo, altrimenti
//  "+" e "-" avrebbero un significato speciale e non sarebbero presi 
// come caratteri
//Replace cambia tutti i caratteri che corrispondono al regex con
//il secondo input del metodo, in questo caso un'empty string

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

//Il metodo restituisce le sequenze di caratteri uguali al regex

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}