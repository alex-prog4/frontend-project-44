#!/usr/bin/env node
import { name, generateQuestion, interfaceBrainGames } from '../src/index.js';

const controlPrime = (number) => {
  let primeControl = 0;
  for (let i = number; i > 0; i -= 1) {
    if (number % i === 0) {
      primeControl += 1;
    }
  }
  if (primeControl === 2) {
    return 'yes';
  }
  return 'no';
};
const compareAnswer = (answerUser, answerProgram) => {
  if (answerUser === answerProgram) {
    return [true, 0, 0];
  }
  return [false, answerUser, answerProgram];
};
const generateNumber = () => {
  const question = Math.floor(Math.random() * 100);
  return question;
};
const taskBrainGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const nameUser = name(taskBrainGame);
let round = 0;
let nextRound = true;
while (round < 3 && nextRound) {
  const number = generateNumber();
  const task = `${number}`;
  nextRound = interfaceBrainGames(compareAnswer(generateQuestion(task), controlPrime(number)), round, nameUser);
  round += 1;
}
