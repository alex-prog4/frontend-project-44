#!/usr/bin/env node
import interfaceBrainGames from '../src/index.js';

const gameDiscription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateNumber = () => {
  const number = Math.floor(Math.random() * 100);
  return number;
};
const generateTaskPrime = () => {
  const number = generateNumber();
  let primeControl = 0;
  for (let i = number; i > 0; i -= 1) {
    if (number % i === 0) {
      primeControl += 1;
    }
  }
  if (primeControl === 2) {
    return [`${number}`, 'yes'];
  }
  return [`${number}`, 'no'];
};
interfaceBrainGames(gameDiscription, generateTaskPrime);

