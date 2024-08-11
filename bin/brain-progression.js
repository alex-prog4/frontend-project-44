#!/usr/bin/env node
import { name, generateQuestion, interfaceBrainGames } from '../src/index.js';

const compareAnswer = (answerUser, answerProgram) => {
  if (answerUser === answerProgram) {
    return [true, 0, 0];
  }
  return [false, answerUser, answerProgram];
};
const generateNumber = (range) => {
  const question = Math.floor(Math.random() * range);
  return question;
};
const generateProgression = (firstNumberProgression, stepProgression) => {
  const quantityNumber = generateNumber(5) + 5;
  const indexLostNumber = generateNumber(quantityNumber);
  let nextNumberProgression = firstNumberProgression;
  let task = '';
  let lostNumber = 0;
  for (let i = 0; i < quantityNumber; i += 1) {
    if (i === indexLostNumber) {
      task += '.. ';
      lostNumber = nextNumberProgression;
      nextNumberProgression += stepProgression;
    }
    task += `${nextNumberProgression} `;
    nextNumberProgression += stepProgression;
  }
  return [task, `${lostNumber}`];
};
const stepProgression = () => {
  const step = generateNumber(10);
  return (step === 0) ? 1 : step;
};
const taskBrainGame = 'What number is missing in the progression?';
const nameUser = name(taskBrainGame);
let round = 0;
let nextRound = true;
while (round < 3 && nextRound) {
  const firstNumberProgression = generateNumber(100);
  const task = generateProgression(firstNumberProgression, stepProgression());
  const resultCompare = compareAnswer(generateQuestion(task[0]), task[1]);
  nextRound = interfaceBrainGames(resultCompare, round, nameUser);
  round += 1;
}
