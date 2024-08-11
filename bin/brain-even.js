#!/usr/bin/env node
import { name, generateQuestion, interfaceBrainGames } from '../src/index.js';

const parity = (number) => {
  if (number % 2 === 0) {
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
const taskBrainGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const nameUser = name(taskBrainGame);
let round = 0;
let nextRound = true;
while (round < 3 && nextRound) {
  const number = generateNumber();
  const task = `${number}`;
  nextRound = interfaceBrainGames(compareAnswer(generateQuestion(task),
	parity(number)),
	round,
	nameUser);
  round += 1;
}
