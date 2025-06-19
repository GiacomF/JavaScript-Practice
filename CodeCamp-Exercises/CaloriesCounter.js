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

function cleanInputString(str) {
  const regex = /[+-\s]/g;
}