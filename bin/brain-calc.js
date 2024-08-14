#!/usr/bin/env node
import interfaceBrainGames from '../src/index.js';

const gameDiscription = 'What is the result of the expression?';
const generateNumber = () => {
  const number = Math.floor(Math.random() * 100);
  return number;
};
const generateTaskCalc = () => {
  const firstNumber = generateNumber();
  const secondNumber = generateNumber();
  const question = Math.floor(Math.random() * 3);
  switch (question) {
    case 0: return [`${firstNumber} + ${secondNumber}`, `${firstNumber + secondNumber}`];
    case 1: return [`${firstNumber} - ${secondNumber}`, `${firstNumber - secondNumber}`];
    case 2: return [`${firstNumber} * ${secondNumber}`, `${firstNumber * secondNumber}`];
    default: return [`${firstNumber} * ${secondNumber}`, `${firstNumber * secondNumber}`];
  }
};
interfaceBrainGames(gameDiscription, generateTaskCalc);

