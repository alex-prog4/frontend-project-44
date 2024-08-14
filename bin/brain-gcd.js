#!/usr/bin/env node
import interfaceBrainGames from '../src/index.js';

const gameDiscription = 'Find the greatest common divisor of given numbers.';
const generateNumber = () => {
  const number = Math.floor(Math.random() * 100);
  if (number === 0) {
    return 1;
  }
  return number;
};
const generateTaskGCD = () => {
  const firstNumber = generateNumber();
  const secondNumber = generateNumber();
  for (let i = Math.min(firstNumber, secondNumber); i > 0; i -= 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      return [`${firstNumber} ${secondNumber}`, `${i}`];
    }
  }
  return [`${firstNumber} ${secondNumber}`, `${1}`];
};
interfaceBrainGames(gameDiscription, generateTaskGCD);
