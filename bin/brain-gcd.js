#!/usr/bin/env node
import { name, generateQuestion, interfaceBrainGames } from '../src/index.js';

const gCD = (firstNumber, secondNumber) => {
  let result = '';
  for (let i = Math.min(firstNumber, secondNumber); i > 0; i -= 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      result += `${i}`;
    }
  }
  return result;
};
const compareAnswer = (answerUser, answerProgram) => {
  if (answerUser === answerProgram) {
    return [true, 0, 0];
  }
  return [false, answerUser, answerProgram];
};
const generateNumber = () => {
  const question = Math.floor(Math.random() * 100);
  if (question === 0) {
    return 1;
  }
  return question;
};
const taskBrainGame = 'Find the greatest common divisor of given numbers.';
const nameUser = name(taskBrainGame);
let round = 0;
let nextRound = true;
while (round < 3 && nextRound) {
  const firstNumber = generateNumber();
  const secondNumber = generateNumber();
  const task = `${firstNumber} ${secondNumber}`;
  const resultCompare = compareAnswer(generateQuestion(task), gCD(firstNumber, secondNumber));
  nextRound = interfaceBrainGames(resultCompare, round, nameUser);
  round += 1;
}
