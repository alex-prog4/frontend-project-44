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
const taskBrainGame = 'What number is missing in the progression?';
const nameUser = name(taskBrainGame);
let round = 0;
let nextRound = true;
while (round < 3 && nextRound) {
  const firstNumberProgression = generateNumber(100);
  const stepProgression = generateNumber(10);
  const task = generateProgression(firstNumberProgression,
	                           (stepProgression === 0) ? 1 : stepProgression);
  nextRound = interfaceBrainGames(compareAnswer(generateQuestion(task[0]), task[1]),
	                          round,
	                          nameUser);
  round += 1;
}
