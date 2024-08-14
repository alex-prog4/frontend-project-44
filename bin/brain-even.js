#!/usr/bin/env node
import interfaceBrainGames from '../src/index.js';

const gameDiscription = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateAnswerProgram = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const generateTaskEven = () => {
  const number = Math.floor(Math.random() * 100);
  const answerProgram = generateAnswerProgram(number);
  return [`${number}`, answerProgram];
};
interfaceBrainGames(gameDiscription, generateTaskEven);

